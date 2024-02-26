import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards } from '@nestjs/common'
import { Response } from 'express'
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard'
//Service import
import { CountryService } from './country.service'
//DTO import
import { CountryValueControlDTO } from './dto/country.dto'

@Controller(`api/${process.env.API_VERSION}/country`)
@UseGuards(new ApiKeyGuard())
export class CountryController {
  constructor(
    private readonly CountryService: CountryService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getCountryAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: CountryValueControlDTO
  ){
    try {
        console.log(queryParams)
    
        const query: CountryValueControlDTO = {
          from: queryParams.from != null ? Number(queryParams.from) : 0,
          take: queryParams.take = queryParams.take !== undefined ? Number(queryParams.take) : 50,
          id: queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined,
          name: queryParams.name != null ? String(queryParams.name) : null,
          official_name: queryParams.official_name != null ? String(queryParams.official_name) : null,
          abbr: queryParams.abbr != null ? String(queryParams.abbr) : null,
          internet_tld: queryParams.internet_tld != null ? String(queryParams.internet_tld) : null,
          motto: queryParams.motto != null ? String(queryParams.motto) : null,
          anthem: queryParams.anthem != null ? String(queryParams.anthem) : null,
          capital: queryParams.capital != null ? String(queryParams.capital) : null,
          official_language: queryParams.official_language != null ? String(queryParams.official_language) : null,
          iso_3166_1_alpha_2: queryParams.iso_3166_1_alpha_2 != null ? String(queryParams.iso_3166_1_alpha_2) : null,
          iso_3166_1_alpha_3: queryParams.iso_3166_1_alpha_3 != null ? String(queryParams.iso_3166_1_alpha_3) : null,
          calling_code: queryParams.calling_code != null ? String(queryParams.calling_code) : null,
          timezone: queryParams.timezone != null ? String(queryParams.timezone) : null,
          id_coat_of_arms_fk: queryParams.id_coat_of_arms_fk != null ? Number(queryParams.id_coat_of_arms_fk) : null,
          coat_of_arms_name: queryParams.coat_of_arms_name != null ? String(queryParams.coat_of_arms_name) : null,
          coat_of_arms_type: queryParams.coat_of_arms_type != null ? String(queryParams.coat_of_arms_type) : null,
          id_flag_fk: queryParams.id_flag_fk != null ? Number(queryParams.id_flag_fk) : null,
          flag_name: queryParams.flag_name != null ? String(queryParams.flag_name) : null,
          flag_type: queryParams.flag_type != null ? String(queryParams.flag_type) : null,
          id_currency_fk: queryParams.id_currency_fk != null ? Number(queryParams.id_currency_fk) : null,
          currency_abbr: queryParams.currency_abbr != null ? String(queryParams.currency_abbr) : null,
          currency_name: queryParams.currency_name != null ? String(queryParams.currency_name) : null,
          id_region_fk: queryParams.id_region_fk != null ? Number(queryParams.id_region_fk) : null,
          region_name: queryParams.region_name != null ? String(queryParams.region_name) : null,
          id_sub_region_fk: queryParams.id_sub_region_fk != null ? Number(queryParams.id_sub_region_fk) : null,
          sub_region_name: queryParams.sub_region_name != null ? String(queryParams.sub_region_name) : null,
          order_by: queryParams.order_by != null ? String(queryParams.order_by) : null,
          order_direction: queryParams.order_direction != null ? String(queryParams.order_direction) : null
        }

        console.log("query:", query)
    
        //Validation
        if (
          query === null ||
          Object.keys(query).length === 0 ||
          Object.keys(query).some(key => !query.hasOwnProperty(key))
        ) {
            console.log(`Error: ${query} (${typeof query})`)
            return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' })
        } else if (
            Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
            query.from < 0 || 
            query.take < 0 ||
            (queryParams.take > 50 || queryParams.take === null || queryParams.take === 0) ||
            (query.id !== undefined && isNaN(query.id)) ||
            (query.id !== undefined && (query.id < 1 || query.id > 164) || query.id === undefined) && query.id !== null ||
            (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 100))) ||
            (query.official_name !== null && (query.official_name && (query.official_name.length < 4 || query.official_name.length > 100))) ||
            (query.abbr !== null && (query.abbr && (query.abbr.length < 2 || query.abbr.length > 5))) ||
            (query.internet_tld !== null && (query.internet_tld && (query.internet_tld.length < 2 || query.internet_tld.length > 20))) ||
            (query.motto !== null && (query.motto && (query.motto.length < 4 || query.motto.length > 100))) ||
            (query.anthem !== null && (query.anthem && (query.anthem.length < 4 || query.anthem.length > 100))) ||
            (query.capital !== null && (query.capital && (query.capital.length < 4 || query.capital.length > 100))) ||
            (query.official_language !== null && (query.official_language && (query.official_language.length < 4 || query.official_language.length > 50))) ||
            (query.iso_3166_1_alpha_2 !== null && (query.iso_3166_1_alpha_2 && (query.iso_3166_1_alpha_2.length < 2 || query.iso_3166_1_alpha_2.length > 5))) ||
            (query.iso_3166_1_alpha_3 !== null && (query.iso_3166_1_alpha_3 && (query.iso_3166_1_alpha_3.length < 3 || query.iso_3166_1_alpha_3.length > 5))) ||
            (query.calling_code !== null && (query.calling_code && (query.calling_code.length < 1 || query.calling_code.length > 10))) ||
            (query.timezone !== null && (query.timezone && (query.timezone.length < 3 || query.timezone.length > 20))) ||
            (query.id_coat_of_arms_fk !== null && (query.id_coat_of_arms_fk < 1 || query.id_coat_of_arms_fk > 164)) ||
            (query.coat_of_arms_name !== null && (query.coat_of_arms_name && (query.coat_of_arms_name.length < 4 || query.coat_of_arms_name.length > 50))) ||
            (query.coat_of_arms_type !== null && (query.coat_of_arms_type && (query.coat_of_arms_type.length < 4 || query.coat_of_arms_type.length > 10))) ||
            (query.id_flag_fk !== null && (query.id_flag_fk < 1 || query.id_flag_fk > 163)) ||
            (query.flag_name !== null && (query.flag_name && (query.flag_name.length < 4 || query.flag_name.length > 50))) ||
            (query.flag_type !== null && (query.flag_type && (query.flag_type.length < 4 || query.flag_type.length > 10))) ||
            (query.id_currency_fk !== null && (query.id_currency_fk < 1 || query.id_currency_fk > 161)) ||
            (query.currency_abbr !== null && (query.currency_abbr && (query.currency_abbr.length < 2 || query.currency_abbr.length > 3))) ||
            (query.currency_name !== null && (query.currency_name && (query.currency_name.length < 4 || query.currency_name.length > 40))) ||
            (query.id_region_fk !== null && (query.id_region_fk < 1 || query.id_region_fk > 6)) ||
            (query.region_name !== null && (query.region_name && (query.region_name.length < 4 || query.region_name.length > 30))) ||
            (query.id_sub_region_fk !== null && (query.id_sub_region_fk < 1 || query.id_sub_region_fk > 37)) ||
            (query.sub_region_name !== null && (query.sub_region_name && (query.sub_region_name.length < 7 || query.sub_region_name.length > 50)))
        ) {
            return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' })
        }

  
      const response = await this.CountryService.getCountryAll(query)
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}