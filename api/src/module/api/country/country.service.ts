import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
//DTO import
import { CountryValueControlDTO } from "./dto/country.dto";
//Interface import
import { FormattedCountry } from "./interface/country.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Country } from "./entity/country.entity";
import { Repository, Like } from "typeorm";

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
  ) {}
  
  async getCountryAll(query: CountryValueControlDTO): Promise<FormattedCountry[]> {
    console.log("query:", query)

    let order = {}
    if(query.order_by && query.order_direction) {
      order = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      order = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      order = {id_country: query.order_direction}
    }

    let fromTake = {}
    if(query.from !== 0 && query.take) {
      fromTake = { skip: query.from, take: query.take };
    } else if (query.from !== 0 && !query.take) {
      fromTake = { skip: query.from, take: 30 };
    } else if (query.from === 0 || !query.from && query.take) {
      fromTake = { take: query.take };
    }

    const response = await this.countryRepository.find({
      ...fromTake,
      where: {
        ...(query.id && { id_country: query.id }),
        ...(query.name && { name: Like(`%${query.name}%`) }),
        ...(query.official_name && { official_name: Like(`%${query.official_name}%`) }),
        ...(query.abbr && { abbr: Like(`%${query.abbr}%`) }),
        ...(query.internet_tld && { internet_tld: Like(`%${query.internet_tld}%`) }),
        ...(query.motto && { motto: query.motto }),
        ...(query.anthem && { anthem: query.anthem }),
        ...(query.capital && { capital: query.capital }),
        ...(query.official_language && { official_language: Like(`%${query.official_language}%`) }),
        ...(query.iso_3166_1_alpha_2 && { iso_3166_1_alpha_2: query.iso_3166_1_alpha_2 }),
        ...(query.iso_3166_1_alpha_3 && { iso_3166_1_alpha_3: query.iso_3166_1_alpha_3 }),
        ...(query.calling_code && { calling_code: query.calling_code }),
        ...(query.timezone && { timezone: query.timezone }),
        ...(query.id_coat_of_arm_fk && { id_coat_of_arm: query.id_coat_of_arm_fk }),
        ...(query.id_flag_fk && { id_flag: query.id_flag_fk }),
        ...(query.id_currency_fk && { id_currency: query.id_currency_fk }),
        ...(query.id_region_fk && { id_region: query.id_region_fk }),
        ...(query.id_sub_region_fk && { id_sub_region: query.id_sub_region_fk }),
        ...(query.coat_of_arm_name && { coat_of_arm: { name: Like(`%${query.coat_of_arm_name}%`) } }),
        ...(query.coat_of_arm_type && { coat_of_arm: { type: Like(`%${query.coat_of_arm_type}%`) } }),
        ...(query.flag_name && { flag: { name: Like(`%${query.flag_name}%`) } }),
        ...(query.flag_type && { flag: { type: Like(`%${query.flag_type}%`) } }),
        ...(query.currency_abbr && { currency: { abbr: Like(`%${query.currency_abbr}%`) } }),
        ...(query.currency_name && { currency: { name: Like(`%${query.currency_name}%`) } }),
        ...(query.region_name && { region: { name: Like(`%${query.region_name}%`) } }),
        ...(query.sub_region_name && { sub_region: { name: Like(`%${query.sub_region_name}%`) } })
      },      
      relations: ["coat_of_arm", "flag", "currency", "region", "sub_region"],
      select: [
        "id_country",
        "name",
        "official_name",
        "abbr",
        "internet_tld",
        "motto",
        "anthem",
        "capital",
        "official_language",
        "population",
        "iso_3166_1_alpha_2",
        "iso_3166_1_alpha_3",
        "calling_code",
        "timezone",
      ],
      order
    })
    // console.log("response:", response)

    return response.length > 0 ? response : [];
  }
}