import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

//Config import
import { ConfigService } from '@nestjs/config';

//Service import
import { ClassCountry, CountryService } from './country.service';
//DTO import
import { QueryControl } from './dto/country.dto';
//Interface import
import { DatabaseConfig } from './interfaces/database.config.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('api/v1/country')
export class countriesController {
  constructor(
    private readonly ClassCountry: ClassCountry,
    private readonly ConfigService: ConfigService<{ database: DatabaseConfig }, true>,
    private readonly Prisma: PrismaService,
    private readonly CountryService: CountryService
  ) {}

  @Get('info')
  @HttpCode(200)
  async getCountryInfo(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: QueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const countryQuery = queryParams.country ? queryParams.country.replace(/^\w/, (c) => c.toUpperCase()) : null;
      console.log("country:", countryQuery)
      // console.log("params:", params)
      
      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'country');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      }if(apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
        return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      }

      const country = await this.CountryService.getCountryByName(countryQuery)

      return res.send(country)
    } catch(error) {
      console.log(error)
      return res.send({message: error.message})
    }
  }
  
  @Get('flag')
  @HttpCode(200)
  async getCountryFlag(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: QueryControl
  ){

    const apiKey = parseInt(apiKeyHeader, 10)

    //Validations
    const otherParams = Object.keys(queryParams).filter(key => key !== 'country');
    if (otherParams.length > 0) {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
    }

    if(apiKey !== 123) {
      console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
      return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
    }
  }
}