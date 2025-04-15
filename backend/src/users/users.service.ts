import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'
import { formatDto } from 'src/utils'
import { PrismaService } from 'src/prisma_m/prisma.service'
import { EditUserDto } from './dto'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    private signAuthToken(payload: {id: number, firstName: string, lastName: string, email: string, role: string}): Promise<string> {
        return this.jwtService.signAsync(payload, {
            expiresIn: 10 * 86_400 // 10 * 86_400 is the amount of seconds in 10 days
        });
    }
  
    async findOne(email: string): Promise<object> {
      const user = await this.prisma.user.findUnique({      
        where: {
          email: email
        }
      });
  
      if (!user) throw new NotFoundException("Requested user could not be found");

      // Make sure we exclude the password and any other fields we do not wish to send in the response
      const { passwordHash, isVerified, ...cleanedUser } = user;
  
      return cleanedUser;
    }

    async editUser(editUserDto: EditUserDto, userId: number) {
        // first filter fields to only those that where inputted by user and check if there is any fields that were inputted
        const filteredFields = formatDto<EditUserDto>(editUserDto);

        if (Object.keys(filteredFields).length === 0) throw new BadRequestException("No Fields to Edit");

        // check for password
        if (filteredFields.password) {
            filteredFields.password = await argon2.hash(filteredFields.password);
        }

        // push to db
        const user = await this.prisma.user.update({
          where: {id: userId},
          data: filteredFields,
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true, 
            role: true,
          }
        });

        // create and return updated authorization token
        const new_token = this.signAuthToken(user);

        return { "updatedToken": new_token };

    }

    async deleteUser(_email: string) {
        const { email } = await this.prisma.user.delete({
            select: {
                email: true
            },
            where: {
                email: _email
            }
        });

        return {"confirmation": `Account with email of ${email} is now deleted`};
    }
}
