import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Pipe import
import { ValidationPipe, VersioningType } from '@nestjs/common';
//Guard import
import { ApiVersionGuard } from './guard/api-version.guard';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //GlobalPrefix
  // global prefix for 'countriessundriesapi.com/api'
  app.setGlobalPrefix('api', {
    exclude: ['/user/create', '/user/sign-in', '/user/sign-up', '/auth/google/login', '/auth/sign-in', '/auth/profile']
  })
  //Versioning
  app.enableVersioning({
    type: VersioningType.URI, // default prefix is 'v', and this complements with the @Version decorator in the controllers methods, for now is set to version '1'.
    defaultVersion: '1' // default version of the API
  })

  //Sessions
  app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000, // this is 1 minute,config for a year is "60*60*24*365*1000"
    },
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  //Guard use
  app.useGlobalGuards(new ApiVersionGuard()); // after of the apiKeyGuard, validate the version of the API, if the version is not supported, the guard throw an UnauthorizedException, and if the version is supported, the guard return true and the request continue to the next middleware
  //Pipe use
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true }
  }));
  //Middleware
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4321', 'http://localhost:4321/profile', 'https://accounts.google.com', process.env.HOST],
    allowedHeaders: [
      'Content-Type',
      'x-countries_sundries-key',
      'x-api-version',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  })
  
  await app.listen(3000);  
}
bootstrap();