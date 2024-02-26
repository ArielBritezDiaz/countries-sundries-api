import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express';
//Service import
import { CurrencyService } from './currency.service';
//DTO import
import { CurrenciesValueControlDTO, CurrencyValueControlDTO } from './dto/currency.dto';
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard'

@Controller(`api/${process.env.API_VERSION}/currency`)
@UseGuards(new ApiKeyGuard())
export class CurrencyController {
  constructor(
    private readonly CurrencyService: CurrencyService
  ) {}

  @Get('all')
  @HttpCode(200)
  async getAllCurrencies(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: CurrenciesValueControlDTO
  ){
    try {
      // console.log(queryParams);
      
      const query: CurrenciesValueControlDTO = {
        from: queryParams.from != null ? Number(queryParams.from) : 0,
        take: queryParams.take != null ? Number(queryParams.take) : 0,
        id: queryParams.id != null && queryParams.id.toString() !== '0' ? Number(queryParams.id) : undefined,
        name: queryParams.name != null ? String(queryParams.name) : null,
        abbr: queryParams.abbr != null ? String(queryParams.abbr) : null,
        symbol: queryParams.symbol != null ? String(queryParams.symbol) : null,
        order_by: queryParams.order_by != null ? String(queryParams.order_by) : null,
        order_direction: queryParams.order_direction != null ? String(queryParams.order_direction) : null
      };

      console.log("query:", query);

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
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query() queryParams: CurrencyValueControlDTO
  ){
    try {
      console.log(queryParams)
      // const query = queryParams['id'] && typeof(queryParams['id']) === 'string' ? { id: parseInt(queryParams['id'], 10)} : queryParams !== null ? queryParams : null;
      // !/^\d+$/.test(queryParams.id.toString())

      const query: CurrencyValueControlDTO  = {
        id: queryParams['id'] && /^\d+$/.test(queryParams['id'].toString()) && !queryParams['id'].toString().includes("%") ? parseInt(queryParams['id'].toString(), 10) : !queryParams['id'] ? null : undefined,
        name: queryParams['name'] || null,
        abbr: queryParams['abbr'] || null,
        symbol: queryParams['symbol'] || null
      }

      console.log("query:", query)

      //Validations
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
          (query.id !== undefined && (query.id < 1 || query.id > 161) || query.id === undefined) && query.id !== null ||
          (query.name !== null && (!isNaN(parseFloat(query.name)) || query.name && (query.name.length < 3 || query.name.length > 40))) ||
          (query.abbr !== null && (!isNaN(parseFloat(query.abbr)) || query.abbr !== '' && query.abbr.length < 2 || query.abbr.length > 3 )) ||
          (query.symbol !== null && ((!isNaN(parseFloat(query.symbol)) || query.symbol.length < 1 || query.symbol.length > 30)))
        ) {
          return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Invalid parameters' });
      }
      const currency = await this.CurrencyService.getDetailsCurrency(query)

      return res.send(currency)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}