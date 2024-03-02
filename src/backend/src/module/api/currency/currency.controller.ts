import { Controller, HttpCode, Res, Get, Query, UsePipes, ValidationPipe, InternalServerErrorException, Version } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { currencyAllSchema } from './schema/currency-all.schema';
import { currencyDetailsSchema } from './schema/currency-details.schema';
//Service import
import { CurrencyService } from './currency.service';
//DTO import
import { CurrenciesValueControlDTO } from './dto/currency.dto';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';

@Controller(`currency`)
export class CurrencyController {
  constructor(
    private readonly CurrencyService: CurrencyService
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(currencyAllSchema))
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
      throw new InternalServerErrorException()
    }
  }

  @Get('details')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(currencyDetailsSchema))
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
      throw new InternalServerErrorException()
    }
  }
}