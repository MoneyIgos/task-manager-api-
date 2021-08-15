import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from '../users/users.module'
import { LocalStrategy } from './local.strategy'
import { SessionSerializer } from './session.serializer'

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      session: true,
    }),
  ],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
