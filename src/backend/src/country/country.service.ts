import { Injectable } from '@nestjs/common';
import { Country } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassCountry {
  apiKey: string;
  country: string;
}

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getCountryByName(name: string): Promise<Country[]> {
    return this.prisma.country.findMany({
      where: {
        name
      },
      include: {
        id_coat_of_arms_R: true
      }

      // relationLoadStrategy: 'join',
      // include: {
      //   region: {
      //     where: {
      //       name: { equals: name }
      //     }
      //   }
      // }
    });
  }

  async getAllCountries(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }
}