import { Module } from '@nestjs/common';
import { countriesController } from './country.controller';
import { ClassCountry, CountryService } from './country.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [countriesController],
  providers: [ClassCountry, CountryService],
  imports: [PrismaModule]
})
export class CountryModule {}