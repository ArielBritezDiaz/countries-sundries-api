import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

import { FlagService, CoatOfArmService } from './image.service';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';
import { apiKeyDTO } from 'src/interfaces/apiKey.interface';

@Controller(`api/${process.env.API_VERSION}/image`)
export class ImageController {
    constructor(
      private readonly FlagService: FlagService,
      private readonly CoatOfArmService: CoatOfArmService
    ) {}

  @Get('flag')
  @HttpCode(200)
  async getFlag(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: apiKeyDTO['apiKey'],
    @Param() params: any,
    @Query() queryParams: ImageQueryControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const country = queryParams.country != null ? String(queryParams.country) : null;
      // console.log(queryParams)
      // console.log(country)

      const query: ImageQueryControlDTO = {
        country
      }
      
      //Validations
      if (
        query === null ||
        Object.keys(query).length === 0 || 
        !query.hasOwnProperty('country')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' ||
          query[key] < 0)||
          (query.country !== null && (query.country && (query.country.length < 5 || query.country.length > 50)))
      ) {
          console.log(query)
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      if (apiKey === null || apiKey === undefined || isNaN(apiKey)) {
        console.log(`Error: ${apiKey} (${typeof apiKey})`);
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Api-Key must be provided' });
      }
      if (apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof apiKey})`);
        return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Api-Key is incorrect' });
      }

      const response = await this.FlagService.getFlagByName(query)
      const flag = await response[0] && response[0].url !== null ? response[0].url : ''
      // console.log("flag:", flag)
      
      if(flag !== '') {
        return res.status(HttpStatus.OK).sendFile(flag, { root: 'assets/flag' })
      } else {
        return res.status(HttpStatus.NOT_FOUND).send({message: "Flag not found"})
      }
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }

  @Get('coat-of-arm')
  @HttpCode(200)
  async getCoatOfArms(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: ImageQueryControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const coatOfArmName = queryParams['coat-of-arm']
      // console.log(queryParams)
      // console.log(coatOfArmName)
      
      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'coat-of-arm');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      }
      if (apiKey === null || apiKey === undefined || isNaN(apiKey)) {
        console.log(`Error: ${apiKey} (${typeof apiKey})`);
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Api-Key must be provided' });
      }
      if (apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof apiKey})`);
        return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Api-Key is incorrect' });
      }

      // const coatOfArm = (await this.CoatOfArmService.getCoatOfArmByName(coatOfArmName))
      // return res.sendFile(coatOfArm, { root: 'assets/coat_of_arms' })
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}