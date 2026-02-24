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
import { DeleteDto, DeleteManyDto } from "src/utils/dtos"
import { FitcatService } from './fitcat.service'
import { CategoryDto, UpdateCategoryDto } from './dto'

@Controller('fitcat')
export class FitcatController {
    constructor(private fitcatService: FitcatService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll(@GetUser('id') userId: number) {
        return this.fitcatService.findAll(userId)
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    findOne(@Param('id', ParseIntPipe) cid: number, @GetUser('id') userId: number) {
        return this.fitcatService.findOne(userId, cid)
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
    @Delete('del/m')
    deleteMany(@Body() deleteManyDto: DeleteManyDto, @GetUser('id') userId: number) {
        return this.fitcatService.deleteManyCategories(deleteManyDto, userId)
    }

    @UseGuards(AuthGuard)
    @Delete('del/m/a')
    deleteAllCat(@GetUser('id') userId: number) {
        return this.fitcatService.deleteAll(userId)
    }
}
