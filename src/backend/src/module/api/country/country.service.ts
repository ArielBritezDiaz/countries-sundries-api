import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
import { PrismaService } from "../../prisma/prisma.service";
//DTO import
import { CountryValueControlDTO } from "./dto/country.dto";
//Interface import
import { FormattedCountry } from "./interface/country.interface";

@Injectable()
export class CountryService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
  ) {}
  
  async getCountryAll(query: CountryValueControlDTO): Promise<FormattedCountry[]> {
    // console.log("query:", query)

    let orderBy = {}
    if(query.order_by && query.order_direction) {
      orderBy = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      orderBy = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      orderBy = {id_country: query.order_direction}
    }

    const response = await this.prisma.country.findMany({
      ...(query.from !== 0 && { skip: query.from } ),
      ...(query.take !== 0 && { take: query.take } ),
      where: {
        ...(query.id && { id_country: { equals: query.id} }),
        ...(query.name && { name: { equals: query.name} }),
        ...(query.official_name && { official_name: { contains: query.official_name} }),
        ...(query.abbr && { abbr: { contains: query.abbr} }),
        ...(query.internet_tld && { internet_tld: { contains: query.internet_tld} }),
        ...(query.motto && { motto: { equals: query.motto} }),
        ...(query.anthem && { anthem: { equals: query.anthem} }),
        ...(query.capital && { capital: { equals: query.capital} }),
        ...(query.official_language && { official_language: { contains: query.official_language} }),
        ...(query.iso_3166_1_alpha_2 && { iso_3166_1_alpha_2: { equals: query.iso_3166_1_alpha_2} }),
        ...(query.iso_3166_1_alpha_3 && { iso_3166_1_alpha_3: { equals: query.iso_3166_1_alpha_3} }),
        ...(query.calling_code && { calling_code: { equals: query.calling_code} }),
        ...(query.timezone && { timezone: { equals: query.timezone} }),
        ...(query.id_coat_of_arms_fk && { id_coat_of_arms: { equals: query.id_coat_of_arms_fk} }),
        ...(query.coat_of_arms_name && { coat_of_arms: { name: { equals: query.coat_of_arms_name } } }),
        ...(query.coat_of_arms_type && { coat_of_arms: { type: { contains: query.coat_of_arms_type } } }),
        ...(query.id_flag_fk && { id_flag: { equals: query.id_flag_fk } }),
        ...(query.flag_name && { flag: { name: { equals: query.flag_name } } }),
        ...(query.flag_type && { flag: { type: { contains: query.flag_type } } }),
        ...(query.id_currency_fk && { id_currency: { equals: query.id_currency_fk} }),
        ...(query.currency_abbr && { currency: { abbr: { contains: query.currency_abbr } } }),
        ...(query.currency_name && { currency: { name: { contains: query.currency_name } } }),
        ...(query.id_region_fk && { id_region: { equals: query.id_region_fk } }),
        ...(query.region_name && { region: { name: { equals: query.region_name } } }),
        ...(query.id_sub_region_fk && { id_sub_region: { equals: query.id_sub_region_fk } }),
        ...(query.sub_region_name && { sub_region: { name: { equals: query.sub_region_name } } })
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
        coat_of_arms: {
          select: {
            id_coat_of_arms: true,
            name: true,
            type: true,
            url: true
          }
        },
        flag: {
          select: {
            id_flag: true,
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
      },
      orderBy
    })
    // console.log("response:", response)

    const formattedCountry = await response.map(country => {
      return {
        ...country,
        flag: country.flag ? {
          id_flag: country.flag.id_flag,
          name: country.flag.name,
          type: country.flag.type,
          url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/flag?name=${country.flag.name}`
        } : null,
        coat_of_arms: country.coat_of_arms ? {
          id_coat_of_arms: country.coat_of_arms.id_coat_of_arms,
          name: country.coat_of_arms.name,
          type: country.coat_of_arms.type,
          url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/coat-of-arm?name=${country.coat_of_arms.name}`
        } : null,
        currency: country.currency ? {
          id_currency: country.currency.id_currency,
          abbr: country.currency.abbr,
          name: country.currency.name,
          symbol: country.currency.symbol
        } : null,
        region: country.region ? {
          id_region: country.region.id_region,
          name: country.region.name
        } : null,
        sub_region: country.sub_region ? {
          id_sub_region: country.sub_region.id_sub_region,
          name: country.sub_region.name
        } : null
      }
    })

    // console.log("FormattedCountry:", JSON.stringify(formattedCountry))

    return formattedCountry !== null && formattedCountry.length > 0 ? formattedCountry : []
  }
}