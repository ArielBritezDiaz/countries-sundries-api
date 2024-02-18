import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CountryModule } from './country/country.module';

//Controllers
import { countriesController } from './country/country.controller';

//Middlewares
import * as cors from 'cors';
import { MorganMiddleware } from './middleware/morgan.middleware';

//DB Config
import { ConfigModule } from "@nestjs/config";
import databaseConfiguration from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.database.env',
      isGlobal: true,
      cache: true,
      load: [databaseConfiguration]
    }),
    CountryModule
  ]
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