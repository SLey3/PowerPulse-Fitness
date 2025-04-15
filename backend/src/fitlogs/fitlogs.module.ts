import { Module } from '@nestjs/common'
import { FitlogsController } from './fitlogs.controller'
import { FitlogsService } from './fitlogs.service'

@Module({
  controllers: [FitlogsController],
  providers: [FitlogsService]
})
export class FitlogsModule {}
