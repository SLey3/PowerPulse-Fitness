import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module';
import { NavlinksModule } from './navlinks/navlinks.module';
import { NavlinkController } from './navlink/navlink.controller';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    NavlinksModule
  ],
  controllers: [NavlinkController]
})
export class AppModule {}
