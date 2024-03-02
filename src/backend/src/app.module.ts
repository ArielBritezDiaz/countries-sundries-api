import { Module, NestModule, MiddlewareConsumer, UseGuards } from '@nestjs/common';
//module
import { CountryModule } from './module/api/country/country.module';
import { CurrencyModule } from './module/api/currency/currency.module';
import { RegionModule } from './module/api/region/region.module';
import { SubRegionModule } from './module/api/sub_region/subRegion.module';
import { FlagModule } from './module/api/flag/flag.module';
import { ImageModule } from './module/api/image/image.module';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
//Controllers
import { CountryController } from './module/api/country/country.controller';
import { FlagController } from './module/api/flag/flag.controller';
// import { CoatOfArmController } from '.module/api-endpoints/coat_of_arms/coat_of_arms.controller';
import { CurrencyController } from './module/api/currency/currency.controller';
import { RegionController } from './module/api/region/region.controller';
import { SubRegionController } from './module/api/sub_region/subRegion.controller';
import { ImageController } from './module/api/image/image.controller';
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