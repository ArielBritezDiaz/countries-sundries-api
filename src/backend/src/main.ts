import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
//Pipe import
import { HttpException, HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';
//Fastify platfom for versioning API
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { FastifyRequest } from 'fastify';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.setGlobalPrefix('api') // global prefix for 'countriessundriesapi.com/api'
  app.enableVersioning({
    type: VersioningType.URI, // default prefix is 'v', and this complements with the @Version decorator in the controllers methods, for now is set to version '1'.
    defaultVersion: '1'
  })
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