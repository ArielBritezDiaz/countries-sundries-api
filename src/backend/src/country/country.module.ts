import { Module } from '@nestjs/common';
import { countriesController } from './country.controller';
import { ClassCountry } from './country.service';

@Module({
  imports: [],
  controllers: [countriesController],
  providers: [ClassCountry],
})
export class CountryModule {}