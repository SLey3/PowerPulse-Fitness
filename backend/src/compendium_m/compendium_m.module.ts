import { Module, Global } from '@nestjs/common'
import { CompendiumMController } from './compendium_m.controller'
import { CompendiumMService } from './compendium_m.service'

@Global()
@Module({
  controllers: [CompendiumMController],
  providers: [CompendiumMService],
  exports: [CompendiumMService]
})
export class CompendiumMModule {}
