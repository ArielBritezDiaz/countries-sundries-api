import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

import { FlagService, CoatOfArmService } from './image.service';
import { ValueQueryControl } from '../../dto/queryControl.dto';

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
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: ValueQueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const flagName = queryParams['flag']
      // console.log(queryParams)
      // console.log(flagName)
      
      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'flag');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      }
      // if(apiKey !== 123) {
      //   console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
      //   return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      // }

      const flag = await this.FlagService.getFlagByName(flagName)
      return res.sendFile(flag, { root: 'assets/flag' })
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
    @Query() queryParams: ValueQueryControl
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
      // if(apiKey !== 123) {
      //   console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
      //   return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      // }

      const coatOfArm = await this.CoatOfArmService.getCoatOfArmByName(coatOfArmName)
      return res.sendFile(coatOfArm, { root: 'assets/coat_of_arms' })
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}