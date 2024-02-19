import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

//Service import
import { ClassCountry, CountryService, FlagService } from './country.service';
//DTO import
import { ValueQueryControl } from '../../dto/queryControl.dto';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../interfaces/database.config.interface';

// const { protocol, apiVersion, port, host } = ConfigService.get<DatabaseConfig>('database')

@Controller(`api/${process.env.API_VERSION}/info`)
export class CountriesController {
  constructor(
    private readonly ClassCountry: ClassCountry,
    private readonly CountryService: CountryService,
    private readonly FlagService: FlagService
  ) {}

  @Get('country')
  @HttpCode(200)
  async getCountryInfo(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: ValueQueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const countryQuery = queryParams['country'] ? queryParams['country'].replace(/^\w/, (c) => c.toUpperCase()) : null;

      // console.log("country:", countryQuery)
      // console.log("params:", params)
      
      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'country');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      }
      if(apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
        return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      }

      const country = await this.CountryService.getCountryByName(countryQuery)

      return res.send(country)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
  
  @Get('flag')
  @HttpCode(200)
  async getCountryFlag(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: ValueQueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const countryFlagQuery = queryParams['flag']
      const countryFlag = countryFlagQuery.toLowerCase().replaceAll(' ', '_')
      // console.log(countryFlag)
  
      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'flag');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      }
  
      if(apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
        return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      }
  
      const flag = await this.FlagService.getFlag(countryFlag)
      // console.log(flag)
      return res.send(flag)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}