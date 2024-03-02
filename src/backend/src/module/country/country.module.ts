import { Module } from "@nestjs/common";
import { CountryController } from "./country.controller";
import { CountryService } from "./country.service";

//Caching import
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { redisStore } from 'cache-manager-redis-yet'

@Module({
  imports: [
    CacheModule.register({
      ttl: 20,
      store: redisStore,
      host: 'localhost',
      port: 6379
    })
  ], // cache-manager import for caching
  controllers: [CountryController],
  providers: [
    CountryService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    }
  ]
})
export class CountryModule {}