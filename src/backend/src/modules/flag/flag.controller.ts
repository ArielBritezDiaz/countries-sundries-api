import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
//Service import
import { FlagService } from './flag.service';
//DTO import
import { FlagValueControlDTO } from './dto/flag.dto';
import { apiKeyDTO } from 'src/interfaces/apiKey.interface';

@Controller(`api/${process.env.API_VERSION}/flag`)
export class FlagController {
  constructor(
    private readonly FlagService: FlagService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getFlagAll(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: apiKeyDTO['apiKey'],
    @Param() params: any,
    @Query() queryParams: FlagValueControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const from = queryParams.from != null ? Number(queryParams.from) : 0;
      const take = queryParams.take != null ? Number(queryParams.take) : 0;
      const id = queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      const type = queryParams.type != null ? String(queryParams.type) : null;
      const order_by = queryParams.order_by != null ? String(queryParams.order_by) : null;
      const order_direction = queryParams.order_direction != null ? String(queryParams.order_direction) : null;
      // console.log(queryParams)
  
      const query: FlagValueControlDTO = {
        from,
        take,
        id,
        name,
        type,
        order_by,
        order_direction
      }

      console.log("query:", query)
  
      //Validation
      if (
        query === null ||
        Object.keys(query).length === 0 ||
        Object.keys(query).some(key => !query.hasOwnProperty(key))
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
          query.from < 0 || 
          query.take < 0 ||
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 164) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 50))) ||
          ((query.order_by !== null && query.order_direction === null) || (query.order_direction !== null && query.order_by === null)) ||
          ((query.order_by !== null) && (query.order_by !== '' && query.order_by !== 'id_sub_region' && query.order_by !== 'name' && query.order_by !== 'id_region')) ||
          (query.order_direction !== null && (query.order_direction !== '' && query.order_direction !== 'asc' && query.order_direction !== 'desc'))
      ) {
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
  
      const response = await this.FlagService.getFlagAll(query);
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }

  @Get('details')
  @HttpCode(200)
  async getFlagDetails(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: apiKeyDTO['apiKey'],
    @Param() params: any,
    @Query() queryParams: FlagValueControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const id = queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      const type = queryParams.type != null ? String(queryParams.type) : null;
      // console.log(queryParams)
  
      const query: FlagValueControlDTO = {
        id,
        name,
        type
      }

      console.log("query:", query)
  
      //Validation
      if (
        query === null ||
        Object.keys(query).length === 0 || 
        !query.hasOwnProperty('id') || 
        !query.hasOwnProperty('name') ||
        !query.hasOwnProperty('type')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) ||
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 164) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 50))) ||
          (query.id === null && query.name === null && query.type === null)
      ) {
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
  
      const response = await this.FlagService.getFlagDetails(query);
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}