import { Controller, HttpCode, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { currencySchema } from './schema/currency.schema';
//Service import
import { CurrencyService } from './currency.service';
//DTO import
import { CurrenciesValueControlDTO, CurrencyValueControlDTO } from './dto/currency.dto';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';

@Controller(`api/${process.env.API_VERSION}/currency`)
export class CurrencyController {
  constructor(
    private readonly CurrencyService: CurrencyService
  ) {}

  @Get('all')
  @UsePipes(new ZodValidationPipe(currencySchema))
  @HttpCode(200)
  async getAllCurrencies(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: CurrenciesValueControlDTO
  ){
    try {
      const query: CurrenciesValueControlDTO = { ...queryParams };

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
    @Query(new ValidationPipe({transform: true})) queryParams: CurrenciesValueControlDTO
  ){
    try {
      const query: CurrenciesValueControlDTO = { ...queryParams };
      
      const currency = await this.CurrencyService.getDetailsCurrency(query)

      return res.send(currency)
    } catch(error) {
      console.log(error)
      return res.status(500).send({message: "Internal server error"})
    }
  }
}