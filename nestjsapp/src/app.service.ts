import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'get: Hello World!';
  }
  postHello(): string {
    return 'post: Hello World!';
  }
  putHello(): string {
    return 'put: Hello World!';
  }
  patchHello(): string {
    return 'patch: Hello World!';
  }
}
