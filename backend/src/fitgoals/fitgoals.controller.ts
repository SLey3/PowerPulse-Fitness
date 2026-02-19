import { 
    Controller,
    Param,
    Query,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    HttpCode,
    UseGuards,
    ParseIntPipe
} from "@nestjs/common"

import { DeleteDto, DeleteManyDto } from "src/utils/dtos"

import { Prisma } from "generated/prisma"

import { AuthGuard } from "src/auth/guards/auth.guard"
import { GetUser } from "src/decorator"
import { FitGoalsService } from "./fitgoals.service"
import { CreateDto, UpdateDto, AnalyticsDto } from "./dto"


@Controller('fitgoals')
export class FitGoalsController {
    constructor(private fitgoalsService: FitGoalsService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll(@GetUser('id') userId: number) {
        return this.fitgoalsService.findAll(userId)
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return this.fitgoalsService.findOne(id, userId)
    }

    @UseGuards(AuthGuard)
    @Get("fetch/dash")
    findDash(@GetUser('id') userId: number) {
        return this.fitgoalsService.findDashboard(userId)
    }

    @UseGuards(AuthGuard)
    @Get('fetch/tbl')
    findGoalTable(@GetUser('id') userId: number) {
        return this.fitgoalsService.findGoalTblList(userId)
    }

    @UseGuards(AuthGuard)
    @Post('fetch/da')
    @HttpCode(200)
    findDataAnalyticsData(@Body() analyticsDto: AnalyticsDto, @GetUser('id') userId: number) {
        return this.fitgoalsService.findGoalAnalyticsData(userId, analyticsDto.all, analyticsDto.opts)
    }

    @UseGuards(AuthGuard)
    @Post('new')
    createGoal(@Body() createDto: CreateDto, @GetUser('id') userId: number) {
        return this.fitgoalsService.createGoal(createDto, userId)
    }

    @UseGuards(AuthGuard)
    @Patch("update")
    updateGoal(@Body() updateDto: UpdateDto, @GetUser('id') userId: number) {
        return this.fitgoalsService.updateGoal(updateDto, userId)
    }

    @UseGuards(AuthGuard)
    @Delete('del')
    deleteOne(@Body() deleteDto: DeleteDto, @GetUser('id') userId: number) {
        return this.fitgoalsService.deleteGoal(deleteDto, userId)
    }

    @UseGuards(AuthGuard)
    @Delete('del/m')
    deleteMany(@Body() deleteManyDto: DeleteManyDto, @GetUser('id') userId: number) {
        return this.fitgoalsService.deleteManyGoals(deleteManyDto, userId)
    }

    @UseGuards(AuthGuard)
    @Delete("del/m/a")
    deleteAll(@GetUser('id') userId: number) {
        return this.fitgoalsService.deleteAll(userId)
    }
}