import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma/prisma.service'
import { EditUserDto } from './dto'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    private signAuthToken(payload: {id: number, firstName: string, lastName: string, email: string, role: string}): Promise<string> {
        return this.jwtService.signAsync(payload, {
            expiresIn: 10 * 86_400 // 10 * 86_400 is the amount of seconds in 10 days
        });
    }

    findall(): Promise<object[]> {
      return this.prisma.user.findMany();
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

    async editUser(editUserDto: EditUserDto) {
        // first filter fields to only those that where inputted by user and check if there is any fields that were inputted
        const filteredFields = Object.entries(editUserDto)
          .filter(([_, val]) => typeof val !== 'undefined' && val !== null)
          .reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {}) as EditUserDto;

        if (Object.keys(editUserDto).length === 0) throw new BadRequestException("No Fields to Edit");

        // then use the filter fields to update the user selected by the id
        const {id, ...updateFields} = filteredFields;

        const user = await this.prisma.user.update({
          where: {id: id},
          data: updateFields,
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

    async deleteUser(email: string) {
        const user = await this.prisma.user.delete({
            select: {
                email: true
            },
            where: {
                email: email
            }
        });

        return {"confirmation": `Account with email of ${user.email} is now deleted`}
    }
}
