import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CountryModule } from './country/country.module';
import { countriesController } from './country/country.controller';
import * as cors from 'cors';
import { MorganMiddleware } from './middleware/morgan.middleware';

@Module({
  imports: [CountryModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cors(),
        MorganMiddleware
      )
      .forRoutes(countriesController)
  }
}