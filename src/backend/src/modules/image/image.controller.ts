import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

import { FlagService, CoatOfArmService } from './image.service';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';
import { apiKeyDTO } from 'src/interfaces/apiKey.interface';
import * as sharp from 'sharp';
import { info } from 'console';

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
      const id = queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      // console.log(queryParams)

      const query: ImageQueryControlDTO = {
        id,
        name
      }
      // console.log("query:", query)
      
      //Validations
      if (
        query === null ||
        Object.keys(query).length === 0 ||
        !query.hasOwnProperty('id') ||
        !query.hasOwnProperty('name')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 161) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 50))) ||
          (query.name === null && query.id === null)
      ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      // if (apiKey === null || apiKey === undefined || isNaN(apiKey)) {
      //   console.log(`Error: ${apiKey} (${typeof apiKey})`);
      //   return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Api-Key must be provided' });
      // }
      // if (apiKey !== 123) {
      //   console.log(`Error: ${apiKey} (${typeof apiKey})`);
      //   return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Api-Key is incorrect' });
      // }

      const response = await this.FlagService.getFlag(query);
      // console.log("response client:", response);

      const flag = response && response.length > 0 && response[0]?.url ? response[0].url : null;

      if(flag !== null) {
        return res.sendFile(flag, { root: 'assets/flag' });
      } else {
        return res.status(HttpStatus.NOT_FOUND).send([]);
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
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: apiKeyDTO['apiKey'],
    @Param() params: any,
    @Query() queryParams: ImageQueryControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const id = queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      // console.log(queryParams)

      const query: ImageQueryControlDTO = {
        id,
        name
      }
      // console.log("query:", query)
      
      //Validations
      if (
        query === null ||
        Object.keys(query).length === 0 ||
        !query.hasOwnProperty('id') ||
        !query.hasOwnProperty('name')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 161) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 50))) ||
          (query.name === null && query.id === null)
      ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      // if (apiKey === null || apiKey === undefined || isNaN(apiKey)) {
      //   console.log(`Error: ${apiKey} (${typeof apiKey})`);
      //   return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Api-Key must be provided' });
      // }
      // if (apiKey !== 123) {
      //   console.log(`Error: ${apiKey} (${typeof apiKey})`);
      //   return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Api-Key is incorrect' });
      // }

      const response = await this.CoatOfArmService.getCoatOfArm(query);
      // console.log("response client:", response);

      const coatOfArm = response && response.length > 0 && response[0]?.url ? response[0].url : null;

      if(coatOfArm !== null) {
        return res.sendFile(coatOfArm, { root: 'assets/coat_of_arms' });
      } else {
        return res.status(HttpStatus.NOT_FOUND).send([]);
      }
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}