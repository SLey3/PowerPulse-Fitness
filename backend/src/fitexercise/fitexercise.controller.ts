import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { Prisma } from '@/generated/prisma/client';
import { DeleteManyDto } from '@/src/utils/dtos';
import { AuthGuard } from '@/src/auth/guards/auth.guard';
import { GetUser } from '@/src/decorator';
import { FitexerciseService } from './fitexercise.service';
import { CreateDto, UpdateDto } from './dto';

@Controller('fitexercise')
export class FitexerciseController {
  constructor(private fitExcerciseService: FitexerciseService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(@GetUser('id') userId: number) {
    return this.fitExcerciseService.findAll(userId);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) eid: number,
    @GetUser('id') userId: number,
  ) {
    return this.fitExcerciseService.findOne(eid, userId);
  }

  @UseGuards(AuthGuard)
  @Get('excerpt')
  findExcerpts(@GetUser('id') userId: number) {
    return this.fitExcerciseService.findExcerpt(userId);
  }

  @UseGuards(AuthGuard)
  @Get('dash')
  findDashboard(@GetUser('id') userId: number) {
    return this.fitExcerciseService.findDashboard(userId);
  }

  @UseGuards(AuthGuard)
  @Get('filters')
  findByFilters(
    @Query() queries: Prisma.ExercisesWhereInput,
    @GetUser('id') userId: number,
  ) {
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
  @Patch('edit')
  updateExercise(@Body() updateDto: UpdateDto, @GetUser('id') userId: number) {
    return this.fitExcerciseService.updateExercise(updateDto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteOne(
    @Param('id', ParseIntPipe) eid: number,
    @GetUser('id') userId: number,
  ) {
    return this.fitExcerciseService.deleteExercise(eid, userId);
  }

  @UseGuards(AuthGuard)
  @Delete('del/m')
  deleteMany(
    @Body() deleteManyDto: DeleteManyDto,
    @GetUser('id') userId: number,
  ) {
    return this.fitExcerciseService.deleteManyExercises(deleteManyDto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete('del/m/a')
  deleteAll(@GetUser('id') userId: number) {
    return this.fitExcerciseService.deleteAll(userId);
  }
}
