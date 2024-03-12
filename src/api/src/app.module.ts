import { Module, NestModule, MiddlewareConsumer, UseGuards } from '@nestjs/common';
//Module import
import { UserModule } from './module/user/user.module';
import { CountryModule } from './module/api/country/country.module';
import { CurrencyModule } from './module/api/currency/currency.module';
import { RegionModule } from './module/api/region/region.module';
import { SubRegionModule } from './module/api/sub_region/subRegion.module';
import { FlagModule } from './module/api/flag/flag.module';
import { ImageModule } from './module/api/image/image.module';
//Controller import
import { UserController } from './module/user/user.controller';
import { CountryController } from './module/api/country/country.controller';
import { FlagController } from './module/api/flag/flag.controller';
// import { CoatOfArmController } from '.module/api-endpoints/coat_of_arms/coat_of_arms.controller';
import { CurrencyController } from './module/api/currency/currency.controller';
import { RegionController } from './module/api/region/region.controller';
import { SubRegionController } from './module/api/sub_region/subRegion.controller';
import { ImageController } from './module/api/image/image.controller';
//Middlewares
import { MorganMiddleware } from './middleware/morgan.middleware';
//DB Config
import { ConfigModule } from "@nestjs/config";
import databaseConfiguration from './config/database.config';
import { PrismaModule } from './module/prisma/prisma.module';
//Static serve
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
//Enum import
import { ENVVariablesSchema } from './enum/env-variables.enum';
import { AuthModule } from './module/auth/auth.module';
import { AuthController } from './module/auth/auth.controller';
//Throttler import
import { ThrottlerModule } from '@nestjs/throttler';
import { PassportModule } from '@nestjs/passport';
import { CoatOfArmModule } from './module/api/coat-of-arm/coat-of-arm.module';
import { CoatOfArmController } from './module/api/coat-of-arm/coat-of-arm.controller';
import { UTF8Middleware } from './middleware/utf-8.middleware';

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
    PassportModule.register({
      session: true
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    CountryModule,
    FlagModule,
    CoatOfArmModule,
    ImageModule,
    CurrencyModule,
    RegionModule,
    SubRegionModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        MorganMiddleware,
        UTF8Middleware
      )
      .forRoutes(
        UserController,
        AuthController,
        CountryController,
        FlagController,
        CoatOfArmController,
        ImageController,
        CurrencyController,
        RegionController,
        SubRegionController
      )
  }
}