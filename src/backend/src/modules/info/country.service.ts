import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Country, Flag } from '@prisma/client';
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { PrismaService } from '../prisma/prisma.service';

import { FormattedCountry } from './interfaces/country.interface';

@Injectable()
export class ClassCountry {
  apiKey: string;
  country: string;
}

@Injectable()
export class CountryService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getCountryByName(name: string): Promise<FormattedCountry[]> {
    // console.log(this.configService.get<DatabaseConfig>('database'))
    const { protocol, apiVersion, port, host } = this.configService.get<DatabaseConfig>('database')
    
    const response = await this.prisma.country.findMany({
      where: {
        name: { equals: name }
      },
      select: {
        id_country: true,
        name: true,
        official_name: true,
        abbr: true,
        internet_tld: true,
        motto: true,
        anthem: true,
        capital: true,
        official_language: true,
        population: true,
        iso_3166_1_alpha_2: true,
        iso_3166_1_alpha_3: true,
        calling_code: true,
        timezone: true,
        flag: {
          select: {
            id_flag: true,
            name: true,
            type: true,
            url: true
          }
        },
        coat_of_arms: {
          select: {
            id_coat_of_arms: true,
            name: true,
            type: true,
            url: true
          }
        },
        currency: {
          select: {
            id_currency: true,
            abbr: true,
            name: true,
            symbol: true
          }
        },
        region: {
          select: {
            id_region: true,
            name: true
          }
        },
        sub_region: {
          select: {
            id_sub_region: true,
            name: true
          }
        }
      }
    });
    
    // console.log(response);
    const infoCountry = response.map(country  => {
      const { flag, coat_of_arms, currency, region, sub_region, ...rest } = country
      return {
        ...rest,
        flag: {
          ...flag,
          url: `${protocol}://${host}:${port}/api/${apiVersion}/image/flag/${flag.url}`
        },
        coat_of_arms: {
          ...coat_of_arms,
          url: `${protocol}://${host}:${port}/api/${apiVersion}/image/flag/${coat_of_arms.url}`
        },
        currency: {
          ...currency
        },
        region: {
          ...region
        },
        sub_region: {
          ...sub_region
        }
      }
    })

    return infoCountry
}

  async getAllCountries(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }
}

@Injectable()
export class FlagService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getFlag(flagName: string): Promise<Flag[]> {
    const response = await this.prisma.flag.findFirst({
      where: {
        name: { equals: flagName }
      },
      select: {
        id_flag: true,
        name: true,
        type: true,
        url: true
      }
    })

    console.log(response)
    return [ response ]
  }

}
