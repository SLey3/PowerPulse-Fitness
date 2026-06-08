import { Module } from '@nestjs/common';
import { FitlogsController } from './fitlogs.controller';
import { FitlogsService } from './fitlogs.service';
import { FitexerciseModule } from '@/src/fitexercise/fitexercise.module';

@Module({
  imports: [FitexerciseModule],
  controllers: [FitlogsController],
  providers: [FitlogsService],
})
export class FitlogsModule {}
