import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response, query } from 'express';
//Service import
import { CurrencyService } from './currency.service';
//DTO import
import { CurrenciesValueControlDTO, CurrencyValueControlDTO } from './dto/currency.dto';

@Controller(`api/${process.env.API_VERSION}/currency`)
export class CurrencyController {
  constructor(
    private readonly CurrencyService: CurrencyService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getAllCurrencies(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Query() queryParams: CurrenciesValueControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10);
      console.log(queryParams);
      const from = queryParams.from != null ? Number(queryParams.from) : 0;
      const take = queryParams.take != null ? Number(queryParams.take) : 0;
      const id = queryParams.id != null && queryParams.id.toString() !== '0' ? Number(queryParams.id) : undefined;
      const name = queryParams.name != null ? String(queryParams.name) : null;
      const abbr = queryParams.abbr != null ? String(queryParams.abbr) : null;
      const symbol = queryParams.symbol != null ? String(queryParams.symbol) : null;
      const order_by = queryParams.order_by != null ? String(queryParams.order_by) : null;
      const order_direction = queryParams.order_direction != null ? String(queryParams.order_direction) : null;

      const query: { from: number, take: number, id: number, name: string, abbr: string, symbol: string, order_by: string, order_direction: string } = {
        from,
        take,
        id,
        name,
        abbr,
        symbol,
        order_by,
        order_direction
      };

      console.log("query:", query);

      //Validation
      if (
        query === null ||
        Object.keys(query).length === 0 || 
        !query.hasOwnProperty('from') || 
        !query.hasOwnProperty('take') || 
        !query.hasOwnProperty('name') || 
        !query.hasOwnProperty('abbr') || 
        !query.hasOwnProperty('symbol')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) || 
          query.from < 0 || 
          query.take < 0 ||
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 0 || query.id > 220)) ||
          (query.name !== null && (query.name && (query.name.length < 7 || query.name.length > 40))) ||
          (query.abbr !== null && (query.abbr !== '' && query.abbr.length < 2 || query.abbr.length > 3 )) ||
          (query.symbol !== null && (query.symbol && (query.symbol.length < 1 || query.symbol.length > 30 ))) ||
          ((query.order_by !== null && query.order_direction === null) || (query.order_direction !== null && query.order_by === null)) ||
          ((query.order_by !== null) && (query.order_by !== '' && query.order_by !== 'id_currency' && query.order_by !== 'name' && query.order_by !== 'abbr' && query.order_by !== 'symbol')) ||
          (query.order_direction !== null && (query.order_direction !== '' && query.order_direction !== 'asc' && query.order_direction !== 'desc'))
      ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      
      if (apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof apiKey})`);
        return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Api-Key is incorrect' });
      }

      const currencies = await this.CurrencyService.getAllCurrencies(query);

      return res.send(currencies)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }

  @Get('details')
  @HttpCode(200)
  async getExchangeRate(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('Countries_Sundries-API_Key') apiKeyHeader: string,
    @Param() params: any,
    @Query() queryParams: CurrencyValueControlDTO
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      console.log(queryParams)
      // const query = queryParams['id'] && typeof(queryParams['id']) === 'string' ? { id: parseInt(queryParams['id'], 10)} : queryParams !== null ? queryParams : null;
      // !/^\d+$/.test(queryParams.id.toString())
      const id = queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined;
      const name = queryParams['name'] || null;
      const abbr = queryParams['abbr'] || null;
      const symbol = queryParams['symbol'] || null;

      const query: CurrencyValueControlDTO  = {
        id,
        name,
        abbr,
        symbol
      }

      console.log("query:", query)

      //Validations
      if (
        query === null ||
        Object.keys(query).length === 0 || 
        !query.hasOwnProperty('id') || 
        !query.hasOwnProperty('name') || 
        !query.hasOwnProperty('abbr') || 
        !query.hasOwnProperty('symbol')
      ) {
          console.log(`Error: ${query} (${typeof query})`);
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (
          Object.keys(query).some(key => query[key] === '' || query[key] < 0) ||
          (query.id !== undefined && isNaN(query.id)) ||
          (query.id !== undefined && (query.id < 1 || query.id > 220) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (!isNaN(parseFloat(query.name)) || query.name && (query.name.length < 3 || query.name.length > 40))) ||
          (query.abbr !== null && (!isNaN(parseFloat(query.abbr)) || query.abbr !== '' && query.abbr.length < 2 || query.abbr.length > 3 )) ||
          (query.symbol !== null && ((!isNaN(parseFloat(query.symbol)) || query.symbol.length < 1 || query.symbol.length > 30)))
        ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      if(apiKey !== 123) {
        console.log(`Error: ${apiKey} (${typeof(apiKey)})`)
        return res.status(HttpStatus.UNAUTHORIZED).send({message: `Api-Key is incorrect`})
      }

      const currency = await this.CurrencyService.getDetailsCurrency(query)

      return res.send(currency)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}