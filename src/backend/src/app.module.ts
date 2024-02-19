import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
//Modules
import { CountryModule } from './modules/info/country.module';
import { ImageModule } from './modules/image/image.module';
//Controllers
import { CountriesController } from './modules/info/country.controller';
import { ImageController } from './modules/image/image.controller';
//Middlewares
import * as cors from 'cors';
import { MorganMiddleware } from './middleware/morgan.middleware';
//DB Config
import { ConfigModule } from "@nestjs/config";
import databaseConfiguration from './config/database.config';
import { PrismaModule } from './modules/prisma/prisma.module';
//Static serve
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CurrencyController } from './modules/currency/currency.controller';
import { CurrencyModule } from './modules/currency/currency.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
      load: [databaseConfiguration]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'assets'),
      serveRoot: '/assets',
      renderPath: undefined,
      exclude: ['**/*.html']
    }),
    PrismaModule,
    CountryModule,
    ImageModule,
    CurrencyModule
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cors(),
        MorganMiddleware
      )
      .forRoutes(
        CountriesController,
        ImageController,
        CurrencyController
      )
  }
}