import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Delete, 
    Body, 
    Param, 
    UseGuards ,
    ParseIntPipe
} from '@nestjs/common'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { GetUser } from 'src/decorator'
import { FitcatService } from './fitcat.service'
import { CategoryDto, UpdateCategoryDto } from './dto'

@Controller('fitcat')
export class FitcatController {
    constructor(private fitcatService: FitcatService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll(@GetUser() user: any) {
        return this.fitcatService.findAll(user.id)
    }

    @UseGuards(AuthGuard)
    @Get(":name")
    findOne(@Param('name') name: string, @GetUser('id') userId: number) {
        return this.fitcatService.findOne(userId, name)
    }

    @UseGuards(AuthGuard)
    @Post("add")
    createCat(@Body() catDto: CategoryDto) {
        return this.fitcatService.createCat(catDto)
    }

    @UseGuards(AuthGuard)
    @Patch("edit")
    updateCat(@Body() updateCatDto: UpdateCategoryDto, @GetUser('id') userId: number) {
        return this.fitcatService.updateCat(updateCatDto, userId)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    deleteCat(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return this.fitcatService.deleteCat(id, userId)
    }

    @UseGuards(AuthGuard)
    @Delete('all')
    deleteAllCat(@GetUser('id') userId: number) {
        return this.fitcatService.deleteAll(userId)
    }
}
