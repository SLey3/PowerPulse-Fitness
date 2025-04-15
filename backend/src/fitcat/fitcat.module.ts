import { Module } from '@nestjs/common'
import { FitcatController } from './fitcat.controller'
import { FitcatService } from './fitcat.service'

@Module({
  controllers: [FitcatController],
  providers: [FitcatService]
})
export class FitcatModule {}
