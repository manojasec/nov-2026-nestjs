import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StudentsModule } from './students/students.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [StudentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
