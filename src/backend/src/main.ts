import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
//Pipe import
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   defaultVersion: ['1']
  // })
  //Guard use
  app.useGlobalGuards(new ApiKeyGuard());
  //Pipe use
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true }
  }));
  //Middleware
  app.use(cors())
  app.use(express.urlencoded({ extended: true }));
  await app.listen(3000);  
}
bootstrap();