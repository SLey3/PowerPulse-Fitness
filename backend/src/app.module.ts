import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from './prisma_m/prisma.module'
import { EmailModule } from './email/email.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { FitlogsModule } from './fitlogs/fitlogs.module'
import { FitcatModule } from './fitcat/fitcat.module'
import { FitexerciseModule } from './fitexercise/fitexercise.module'
import { CompendiumMModule } from './compendium_m/compendium_m.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    JwtModule.register({ 
      secret: process.env.JWT_SECRET!,
      global: true
    }),
    PrismaModule,
    EmailModule,
    AuthModule,
    UsersModule,
    FitlogsModule,
    FitcatModule,
    FitexerciseModule,
    CompendiumMModule,
  ],
})
export class AppModule {}
