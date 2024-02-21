import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';

//Service import
import { RegionService } from './region.service';
//DTO import
import { RegionsValueControlDTO } from './dto/region.dto';
import { apiKeyDTO } from '../../interfaces/apiKey.interface';
//Interface import

// const { protocol, apiVersion, port, host } = ConfigService.get<DatabaseConfig>('database')

@Controller(`api/${process.env.API_VERSION}/region`)
export class RegionController {
  constructor(
    private readonly RegionService: RegionService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getAllRegions(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: RegionsValueControlDTO
    ){
      const apiKey = parseInt(apiKeyHeader, 10)
      const from = queryParams.from != null ? Number(queryParams.from) : 0;
      const take = queryParams.take != null ? Number(queryParams.take) : 0;
      const id = queryParams.id != null && queryParams.id.toString() !== '0' ? Number(queryParams.id) : 0;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      const order_by = queryParams.order_by != null ? String(queryParams.order_by) : null;
      const order_direction = queryParams.order_direction != null ? String(queryParams.order_direction) : null;
      // console.log(queryParams)

      const query: RegionsValueControlDTO = {
        from,
        take,
        id,
        name,
        order_by,
        order_direction
      }
      // console.log("query:", query)

      //Validation
      if (
        query === null ||
        Object.keys(query).length === 0 || 
        !query.hasOwnProperty('from') || 
        !query.hasOwnProperty('take') ||
        !query.hasOwnProperty('id') || 
        !query.hasOwnProperty('name')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
          query.from < 0 || 
          query.take < 0 ||
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 0 || query.id > 6)) ||
          (query.name !== null && (query.name && (query.name.length < 4 || query.name.length > 30))) ||
          ((query.order_by !== null && query.order_direction === null) || (query.order_direction !== null && query.order_by === null)) ||
          ((query.order_by !== null) && (query.order_by !== '' && query.order_by !== 'id_currency' && query.order_by !== 'name' && query.order_by !== 'abbr' && query.order_by !== 'symbol')) ||
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

      const response = await this.RegionService.getAllRegions(query);
      // console.log("response", response)

      return res.status(HttpStatus.OK).send(response);
    }
}