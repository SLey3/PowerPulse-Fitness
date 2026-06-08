import { Module } from '@nestjs/common';
import { FitGoalsController } from './fitgoals.controller';
import { FitGoalsService } from './fitgoals.service';

@Module({
  controllers: [FitGoalsController],
  providers: [FitGoalsService],
  exports: [FitGoalsService],
})
export class FitGoalsModule {}
