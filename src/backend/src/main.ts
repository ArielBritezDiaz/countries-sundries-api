import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
import { ApiVersionGuard } from './guard/api-version.guard';
//Pipe import
import { RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix for 'countriessundriesapi.com/api'
  app.setGlobalPrefix('api', {
    exclude: [
      { path: '/user/create', method: RequestMethod.POST },
      { path: '/user/sign-in', method: RequestMethod.POST },
      { path: '/user/sign-up', method: RequestMethod.POST },
    ]
  })
  app.enableVersioning({
    type: VersioningType.URI, // default prefix is 'v', and this complements with the @Version decorator in the controllers methods, for now is set to version '1'.
    defaultVersion: '1' // default version of the API
  })
  //Guard use
  app.useGlobalGuards(new ApiVersionGuard()); // after of the apiKeyGuard, validate the version of the API, if the version is not supported, the guard throw an UnauthorizedException, and if the version is supported, the guard return true and the request continue to the next middleware
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