import { Module, NestModule, MiddlewareConsumer, UseGuards } from '@nestjs/common';
//module
import { CountryModule } from './module/country/country.module';
import { CurrencyModule } from './module/currency/currency.module';
import { RegionModule } from './module/region/region.module';
import { SubRegionModule } from './module/sub_region/subRegion.module';
import { FlagModule } from './module/flag/flag.module';
import { ImageModule } from './module/image/image.module';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
//Controllers
import { CountryController } from './module/country/country.controller';
import { FlagController } from './module/flag/flag.controller';
// import { CoatOfArmController } from '.module/coat_of_arms/coat_of_arms.controller';
import { CurrencyController } from './module/currency/currency.controller';
import { RegionController } from './module/region/region.controller';
import { SubRegionController } from './module/sub_region/subRegion.controller';
import { ImageController } from './module/image/image.controller';
//Middlewares
import * as cors from 'cors';
import { MorganMiddleware } from './middleware/morgan.middleware';
//DB Config
import { ConfigModule } from "@nestjs/config";
import databaseConfiguration from './config/database.config';
import { PrismaModule } from './module/prisma/prisma.module';
//Static serve
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { APP_GUARD } from '@nestjs/core';
//Enum import
import { ENVVariablesSchema } from './enum/env-variables.enum';

@UseGuards(new ApiKeyGuard())
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ENVVariablesSchema,
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
    FlagModule,
    ImageModule,
    CurrencyModule,
    RegionModule,
    SubRegionModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    }
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
        CountryController,
        FlagController,
        CurrencyController,
        RegionController,
        SubRegionController,
        ImageController
      )
  }
}