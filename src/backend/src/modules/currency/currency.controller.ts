import { Controller, HttpCode, Res, Req, Get, Param, Query, Headers, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Request, Response, query } from 'express';
//Service import
import { CurrencyService } from './currency.service';
//DTO import
import { CurrencyValueQueryControl, CurrenciesValueQueryControl } from 'src/dto/queryControl.dto';


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
    @Query() queryParams: CurrenciesValueQueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10);
      // console.log(queryParams);
      const from = queryParams.from != null ? Number(queryParams.from) : 0;
      const take = queryParams.take != null ? Number(queryParams.take) : 0;

      const query: { from: number, take: number } = {
        from,
        take
      };

      // console.log("query:", query);

      //Validation
      if (query === null || Object.keys(query).length === 0 || !query.hasOwnProperty('from') || !query.hasOwnProperty('take')) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'Parameters must be provided' });
      } else if (Object.keys(query).some(key => query[key] === null || query[key] === undefined || query[key] === '' || query[key] < 0)) {
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
    @Query() queryParams: CurrencyValueQueryControl
  ){
    try {
      const apiKey = parseInt(apiKeyHeader, 10)
      const query = queryParams['id_currency'] && typeof(queryParams['id_currency']) === 'string' ? { id_currency: parseInt(queryParams['id_currency'], 10)} : queryParams !== null ? queryParams : null;

      // console.log("query:", query)

      //Validations
      const otherParams = Object.keys(queryParams).filter(key => key !== 'id_currency' && key !== 'name' && key !== 'abbr' && key !== 'symbol');
      if (otherParams.length > 0) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Invalid parameters'})
      } else if(otherParams === undefined || query === null) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({message: 'Parameters must be provided'})
      }
      if (queryParams.id_currency && isNaN(queryParams.id_currency)) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ message: 'id_currency must be a number type' });
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