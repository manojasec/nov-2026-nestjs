import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }

  @Put()
  putHello(): string {
    return this.appService.putHello();
  }

  @Patch()
  patchtHello(): string {
    return this.appService.patchHello();
  }

}
