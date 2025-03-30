import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import * as argon2 from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service'
import { EmailService } from 'src/email/email.service'
import { SignUpDto, SignInDto, VerifyUserDto } from './dto'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService, 
        private emailService: EmailService, 
        private configService: ConfigService,
        private jwtService: JwtService
    ) {}

    private signJwt(
        payload: object,
        expiresIn: number
    ): Promise<string> {
            return this.jwtService.signAsync(payload, {
                expiresIn: expiresIn
            });
    }

   async validateJwt(jwt: string): Promise<any> {
        const jwt_secret = this.configService.get<string>("JWT_SECRET");

        // verify token
        try {
            const res = await this.jwtService.verifyAsync(jwt, {
                secret: jwt_secret,
            });

            return res;
        } catch (error) {
            if (error?.name === 'TokenExpiredError') {
                throw new BadRequestException("Token is expired!", {
                    cause: error,
                    description: error?.name
                });
            } else if (error?.name === 'JsonWebTokenError') {
                throw new BadRequestException(error?.message, {
                    cause: error,
                    description: error?.name
                });
            }

            throw new Error(error.message);
        }
    }

    async signUp(dto: SignUpDto) {
        let user;
        const frontend_url = this.configService.get<string>("FRONTEND_URL")!;
        const mail_sender_name = this.configService.get<string>("MAIL_SENDER_NAME")!;
        const mail_sender_email = this.configService.get<string>("MAIL_SENDER_EMAIL")!;
        const pwd = await argon2.hash(dto.password);

        // check weight is in kg if not convert it to kg from lbs
        if (dto.weightUnit === 'lbs') {
            dto.weight = dto.weight / 2.205 // formula to convert lbs --> kg: lbs/2.205 
        }

        // create and save new user to db
        try {
            user = await this.prisma.user.create({
                data: {
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email,
                    passwordHash: pwd,
                    phone: dto.phone,
                    weight: dto.weight
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    role: true
                }
            });
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('User already Exists');
                }
            }
            throw error;
        }

        // create jwt for verification email
        const confirmation_token = await this.signJwt({'email': user.email}, 2 * 86_400); // 86_400 is the amount of seconds in 2 days

        // create and send confirmation email
        const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .header {
                    background-color: #0066cc;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px 5px 0 0;
                }
                .content {
                    padding: 20px;
                }
                .button {
                    display: inline-block;
                    background-color: #0066cc;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Welcome to PowerPulse Fitness!</h2>
                </div>
                <div class="content">
                    <p>Hello ${user.firstName},</p>
                    <p>Thank you for creating an account with PowerPulse Fitness!</p>
                    <p>Please confirm your email address by clicking the button below:</p>
                    <p><a class="button" href="${frontend_url}/auth/verify-email?token=${confirmation_token}">Verify Email</a></p>
                    <p><strong>Important:</strong> This verification link will expire in 48 hours.</p>
                    <p>If you did not create this account, please ignore this email.</p>
                </div>
                <div class="footer">
                    <p>PowerPulse Fitness Team</p>
                    <p>This is an automated message, please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
        `

        await this.emailService.send(
            'Thank you for Creating an Account with Us',
            htmlContent,
            { name: mail_sender_name, email: mail_sender_email},
            [{ name: `${user.firstName} ${user.lastName}`, email: user.email }]
        );

        // encode and return complete user jwt to return to frontend
        const userjwt = await this.signJwt(user, 10 * 86_400); // 10 * 86_400 is the amount of seconds in 10 days

        return {'access_token': userjwt};
    }

   async signIn(dto: SignInDto) {
        // verify user exists if not throw forbidden error
        const user = await this.prisma.user.findUnique({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true, 
                role: true,
                passwordHash: true
            },
            where: {
                email: dto.email
            }
        });

        if (!user) throw new ForbiddenException(`Account associated with email "${dto.email}" does not exist`);
        // verify password, if password invalid, throw ForbiddenException
        if (await argon2.verify(user.passwordHash, dto.password)) {
            // once verified create a new object without passwordHash and return a jwt encoded access token as the response
            const { passwordHash, ...cleanedUser } = user;
            const accessToken = await this.signJwt(cleanedUser, 10 * 86_400);
            return {'access_token': accessToken};
        } else {
            throw new ForbiddenException("Password is invalid");
        }
    }

    async verifyUser(dto: VerifyUserDto) {
        
        const user_email = await this.validateJwt(dto.jwt);

        const { email } = user_email;

        await this.prisma.user.update({
            where: {
                email: email
            },
            data: {
                isVerified: true
            }
        });

        return { verified: 'Account has been verified!' };
    }
}
