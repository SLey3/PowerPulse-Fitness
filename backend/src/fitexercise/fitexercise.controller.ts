import { 
    Controller, 
    Get, 
    Post, 
    Delete, 
    Body, 
    Param, 
    Query, 
    ParseIntPipe, 
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
    findAll(@Query('pg_cur', ParseIntPipe) pg_cur: number, @Query('order') order: 'asc' | 'desc', @GetUser('id') userId: number) {
        return this.fitExcerciseService.findAll(userId, pg_cur, order);
    }

    @UseGuards(AuthGuard)
    @Get(':name')
    findOne(@Param('name') name: string, @GetUser('id') userId: number) {
        return this.fitExcerciseService.findOne(name, userId);
    }

    @UseGuards(AuthGuard)
    @Get('tot_pg')
    getTotalPaginationPages(@GetUser('id') userId: number) {
        return this.fitExcerciseService.getTotalPaginationPages(userId);
    }
    
    @UseGuards(AuthGuard)
    @Get('dash')
    findDashboard(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findDashboard(userId);
    }

    @UseGuards(AuthGuard)
    @Get('filters')
    findByFilters(@Query() queries: Prisma.ExercisesWhereInput, @GetUser('id') userId: number) {
        return this.fitExcerciseService.findByFilter(queries, userId);
    }

    @UseGuards(AuthGuard)
    @Get('names')
    findNames(@GetUser('id') userId: number) {
        return this.fitExcerciseService.findNames(userId);
    }

    @UseGuards(AuthGuard)
    @Post('create')
    createExercise(@Body() createDto: CreateDto, @GetUser('id') userId: number) {
        return this.fitExcerciseService.createExercise(createDto, userId);
    }

    @UseGuards(AuthGuard)
    @Delete(':name')
    deleteOne(@Param('name') name: string, @GetUser('id') userId: number) {
        return this.fitExcerciseService.deleteExercise(name, userId);
    }

    @UseGuards(AuthGuard)
    @Delete()
    deleteAll(@GetUser('id') userId: number) {
        return this.fitExcerciseService.deleteAll(userId);
    }
}
