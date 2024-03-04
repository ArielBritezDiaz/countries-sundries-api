import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Pipe import
import { RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';
//Guard import
import { ApiVersionGuard } from './guard/api-version.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global prefix for 'countriessundriesapi.com/api'
  app.setGlobalPrefix('api', {
    exclude: [
      { path: '/user/create', method: RequestMethod.POST },
      { path: '/user/sign-in', method: RequestMethod.POST },
      { path: '/user/sign-up', method: RequestMethod.POST },
      { path: '/auth/sign-in', method: RequestMethod.POST },
      { path: '/auth/profile', method: RequestMethod.GET },
    ]
  })
  app.enableVersioning({
    type: VersioningType.URI, // default prefix is 'v', and this complements with the @Version decorator in the controllers methods, for now is set to version '1'.
    defaultVersion: '1' // default version of the API
  })
  //Guard use
  app.useGlobalGuards(new ApiVersionGuard()); // after of the apiKeyGuard, validate the version of the API, if the version is not supported, the guard throw an UnauthorizedException, and if the version is supported, the guard return true and the request continue to the next middleware
  //Pipe use
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true }
  }));
  //Middleware
  app.enableCors({
    allowedHeaders: [
      'Content-Type',
      'x-countries_sundries_api-key',
      'x-api-version',
    ],
    methods: ['GET', 'POST']
  })
  
  await app.listen(3000);  
}
bootstrap();