import { 
    Controller, 
    Get, 
    Post, 
    Delete, 
    Body, 
    Param, 
    Query,
    UseGuards 
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { GetUser } from 'src/decorator'
import { FitexerciseService } from './fitexercise.service'
import { CreateDto } from './dto'

@Controller('fitexercise')
export class FitexerciseController {
    constructor(private fitExcerciseService: FitexerciseService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findAll(userId)
    }

    // @UseGuards(AuthGuard)
    // @Get(':name')
    // findOne(@Param('name') name: string, @GetUser('id') userId: number) {
    //     return this.fitExcerciseService.findOne(name, userId)
    // }

    @UseGuards(AuthGuard)
    @Get('excerpt')
    findExcerpts(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findExcerpt(userId)
    }
    
    @UseGuards(AuthGuard)
    @Get('dash')
    findDashboard(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findDashboard(userId)
    }

    @UseGuards(AuthGuard)
    @Get('filters')
    findByFilters(@Query() queries: Prisma.ExercisesWhereInput, @GetUser('id') userId: number) {
        return this.fitExcerciseService.findByFilter(queries, userId)
    }

    @UseGuards(AuthGuard)
    @Get('names')
    findNames(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findNames(userId)
    }

    @UseGuards(AuthGuard)
    @Post('create')
    createExercise(@Body() createDto: CreateDto, @GetUser('id') userId: number) {
        return this.fitExcerciseService.createExercise(createDto, userId)
    }

    // @UseGuards(AuthGuard)
    // @Delete(':name')
    // deleteOne(@Param('name') name: string, @GetUser('id') userId: number) {
    //     return this.fitExcerciseService.deleteExercise(name, userId)
    // }

    @UseGuards(AuthGuard)
    @Delete()
    deleteAll(@GetUser('id') userId: number) {
        return this.fitExcerciseService.deleteAll(userId)
    }
}
