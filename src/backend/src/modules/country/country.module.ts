import { Module } from '@nestjs/common';
import { countriesController } from './country.controller';
import { ClassCountry, CountryService, FlagService } from './country.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [countriesController],
  providers: [ClassCountry, CountryService, FlagService],
  imports: [PrismaModule]
})
export class CountryModule {}