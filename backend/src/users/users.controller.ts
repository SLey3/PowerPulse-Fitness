import { 
    Controller, 
    Get, 
    Patch, 
    Delete, 
    Param, 
    Body,
    UseGuards
} from '@nestjs/common'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { GetUser } from 'src/decorator'
import { UsersService } from './users.service'
import { EditUserDto, FindOneDeleteDto } from './dto'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @UseGuards(AuthGuard)
    @Get('singular')
    findOne(@Param() email: FindOneDeleteDto) {
        return this.usersService.findOne(email.email);
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
