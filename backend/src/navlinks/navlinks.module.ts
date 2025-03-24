import { Module } from '@nestjs/common';
import { NavlinksService } from './navlinks.service';
import { NavlinksController } from './navlinks.controller';

@Module({
  providers: [NavlinksService],
  controllers: [NavlinksController]
})
export class NavlinksModule {}
