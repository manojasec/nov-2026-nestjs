import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { StudentsModule } from './students/students.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Student } from './students/entities/student.entity.js';


@Module({
  imports: [StudentsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      
      useFactory: (config: ConfigService) => ({
        type: 'postgres', //   type: 'mysql',
        host: "localhost",//config.get<string>('DB_HOST'),
        port: 5432, //config.get<number>('DB_PORT'),
        username: "postgres", //config.get<string>('DB_USERNAME'),
        password: "Adm!n@123",//config.get<string>('DB_PASSWORD'),
        database: "sms_university_db", //config.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        entities: [Student],
        logging: config.get('NODE_ENV') === 'development',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
