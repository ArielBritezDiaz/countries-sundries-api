import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
//Modules
import { CountryModule } from './modules/country/country.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { RegionModule } from './modules/region/region.module';
import { SubRegionModule } from './modules/sub_region/subRegion.module';
import { FlagModule } from './modules/flag/flag.module';
import { ImageModule } from './modules/image/image.module';
//Controllers
import { CountryController } from './modules/country/country.controller';
import { FlagController } from './modules/flag/flag.controller';
// import { CoatOfArmController } from '.modules/coat_of_arms/coat_of_arms.controller';
import { CurrencyController } from './modules/currency/currency.controller';
import { RegionController } from './modules/region/region.controller';
import { SubRegionController } from './modules/sub_region/subRegion.controller';
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
    FlagModule,
    ImageModule,
    CurrencyModule,
    RegionModule,
    SubRegionModule
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