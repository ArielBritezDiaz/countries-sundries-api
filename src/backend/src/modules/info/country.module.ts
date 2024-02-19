import { Module } from '@nestjs/common';
import { CountriesController } from './country.controller';
import { ClassCountry, CountryService, FlagService } from './country.service';

@Module({
  controllers: [CountriesController],
  providers: [ClassCountry, CountryService, FlagService],
  imports: []
})
export class CountryModule {}