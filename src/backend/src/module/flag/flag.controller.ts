import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
//Service import
import { FlagService } from './flag.service';
//DTO import
import { FlagValueControlDTO } from './dto/flag.dto';
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard'

@Controller(`api/${process.env.API_VERSION}/flag`)
@UseGuards(new ApiKeyGuard())
export class FlagController {
  constructor(
    private readonly FlagService: FlagService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getFlagAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: FlagValueControlDTO
  ){
    try {
      // console.log(queryParams)
  
      const query: FlagValueControlDTO = {
        from: queryParams.from != null ? Number(queryParams.from) : 0,
        take: queryParams.take != null ? Number(queryParams.take) : 0,
        id: queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined,
        name: queryParams.name != null ? String(queryParams.name) : null,
        type: queryParams.type != null ? String(queryParams.type) : null,
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
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: FlagValueControlDTO
  ){
    try {
      // console.log(queryParams)
  
      const query: FlagValueControlDTO = {
        id: queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined,
        name: queryParams.name != null ? String(queryParams.name) : null,
        type: queryParams.type != null ? String(queryParams.type) : null
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
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 164) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 50))) ||
          (query.id === null && query.name === null && query.type === null)
      ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
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