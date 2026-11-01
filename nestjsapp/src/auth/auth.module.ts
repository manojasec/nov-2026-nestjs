import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[],
  exports:[]
})
export class AuthModule {}
