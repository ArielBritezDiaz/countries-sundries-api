import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { ClassCountry } from './country.service';
import { Request, Response } from 'express';
import { QueryControl } from './dto/queryControl.dto';

@Controller('api/v1/country')
export class countriesController {
  constructor(private readonly ClassCountry: ClassCountry) {}

  @Get()
  @HttpCode(200)
  getCountryInfo(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query(new ValidationPipe({ transform: true })) queryParams: QueryControl
  ): any {
      try {
        const apiKey = parseInt(apiKeyHeader)
        let country = queryParams.country
        country = country.charAt(0).toUpperCase() + country.slice(1)
        console.log("country:", country)
        // console.log("params:", params)
        
        //Validations
        const otherParams = Object.keys(queryParams).filter(key => key !== 'country');
        if (otherParams.length > 0) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
        }
        if (country !== 'Argentina') {
          console.log(`Error: ${country} (${typeof(country)})`)
          return res.status(HttpStatus.NOT_FOUND).send({message: `The info for country '${country}' not found`})
        } else if(apiKey !== 123) {
          console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
          return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
        }
        
        return res.send({message: `The info for ${country} is available`})
      } catch(error) {
        console.log(error)
        return res.send({message: error.message})
      }
    }
  
  @Get()
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }
}