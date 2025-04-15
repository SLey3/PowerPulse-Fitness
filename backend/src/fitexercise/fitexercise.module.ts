import { Module } from '@nestjs/common'
import { FitexerciseController } from './fitexercise.controller'
import { FitexerciseService } from './fitexercise.service'

@Module({
  controllers: [FitexerciseController],
  providers: [FitexerciseService]
})
export class FitexerciseModule {}
