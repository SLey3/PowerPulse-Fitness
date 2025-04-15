import { 
    Controller, 
    Post, 
    Get,
    Patch, 
    Body, 
    Param, 
    Delete, 
    ParseIntPipe,
    UseGuards
} from '@nestjs/common'
import { AuthGuard } from 'src/auth/guards/auth.guard'
import { GetUser } from 'src/decorator'
import { FitlogsService } from './fitlogs.service'
import { CreateDto, UpdateDto } from './dto';

@Controller('fitlogs')
export class FitlogsController {
    constructor(private fitLogsService: FitlogsService) {}

    @UseGuards(AuthGuard)
    @Get()
    findAll(@GetUser('id') userId: number) {
        return this.fitLogsService.findAll(userId);
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return this.fitLogsService.findOne(id, userId);
    }

    @UseGuards(AuthGuard)
    @Get('preview/dash')
    findDashboard(@GetUser('id') userId: number) {
        return this.fitLogsService.findDashboard(userId);
    }

    @UseGuards(AuthGuard)
    @Post('create')
    createLog(@Body() createDto: CreateDto, @GetUser('id') userId: number) {
        return this.fitLogsService.createLog(createDto, userId);
    }

    @UseGuards(AuthGuard)
    @Patch('edit')
    editLog(@Body() updateDto: UpdateDto, @GetUser('id') userId: number) {
        return this.fitLogsService.updateLog(updateDto, userId);
    }

    @UseGuards(AuthGuard)
    @Delete()
    deleteLog(@Param('id', ParseIntPipe) id: number, @GetUser('id') userId: number) {
        return this.fitLogsService.deleteLog(id, userId);
    }

    @UseGuards(AuthGuard)
    @Delete('all')
    deleteAll(@GetUser('id') userId: number) {
        return this.fitLogsService.deleteAll(userId);
    }
}
