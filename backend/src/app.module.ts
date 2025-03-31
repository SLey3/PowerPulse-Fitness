import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { JwtModule } from '@nestjs/jwt'
import { PrismaModule } from './prisma/prisma.module'
import { EmailModule } from './email/email.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    JwtModule.register({ 
      secret: process.env.JWT_SECRET!,
      global: true
    }),
    EmailModule,
    AuthModule,
    UsersModule,
  ]
})
export class AppModule {}
