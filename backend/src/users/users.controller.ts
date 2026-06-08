import {
  Controller,
  Get,
  Patch,
  Delete,
  Query,
  Body,
  UseGuards,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@/src/auth/guards/auth.guard';
import { GetUser } from '@/src/decorator';
import { UsersService } from './users.service';
import { EditUserDto, FindOneDeleteDto } from './dto';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('singular')
  findOne(@Body() email: FindOneDeleteDto) {
    return this.usersService.findOne(email.email);
  }

  @UseGuards(AuthGuard)
  @Get('userinfo')
  findUserInfo(@Query('q') query: string, @GetUser('email') userEmail: string) {
    const allowedParams = ['id', 'firstName', 'lastName', 'email'];

    if (!allowedParams.includes(query)) {
      throw new BadRequestException(`Param "${query}" is not allowed`);
    }

    return this.usersService.findUserInfo(decodeURIComponent(query), userEmail);
  }

  @UseGuards(AuthGuard)
  @Patch('edit')
  editUser(@Body() editUserDto: EditUserDto, @GetUser('id') userId: number) {
    return this.usersService.editUser(editUserDto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete('del')
  deleteUser(@Body() deleteDto: FindOneDeleteDto) {
    return this.usersService.deleteUser(deleteDto.email);
  }
}
