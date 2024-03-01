import { Module } from "@nestjs/common";
import { CountryController } from "./country.controller";
import { CountryService } from "./country.service";

//Caching import
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register()], // cache-manager import for caching
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}