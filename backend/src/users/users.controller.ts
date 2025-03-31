import { Controller, HttpCode, Get, Post, Delete, UseGuards, Param, Body, BadRequestException } from '@nestjs/common'
import { validateOrReject } from 'class-validator'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { UsersService } from './users.service'
import { EditUserDto, FindOneDeleteDto } from './dto'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Get('all')
    findAll() {
        return this.usersService.findall();
    }

    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Get('singular')
    findOne(@Param() email: FindOneDeleteDto) {
        return this.usersService.findOne(email.email);
    }

    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Post('edit')
    editUser(@Body() editUserDto: EditUserDto) {
        return this.usersService.editUser(editUserDto);
    }

    @UseGuards(AuthGuard)
    @Delete('del')
    deleteUser(@Body() deleteDto: FindOneDeleteDto) {
        return this.usersService.deleteUser(deleteDto.email);
    }
}
