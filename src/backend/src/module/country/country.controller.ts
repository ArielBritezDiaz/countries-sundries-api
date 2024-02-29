import { Controller, HttpCode, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, HttpException, InternalServerErrorException, Version } from '@nestjs/common'
import { Response } from 'express'
//Service import
import { CountryService } from './country.service'
//DTO import
import { CountryValueControlDTO } from './dto/country.dto'
//Validation import
import { ZodValidationPipe } from '../../pipe/query-params.pipe';
import { countrySchema } from './schema/country.schema';

@Controller('country')
export class CountryController {
  constructor(
    private readonly CountryService: CountryService
  ) {}

  @Get('all')
  @UsePipes(new ZodValidationPipe(countrySchema))
  @HttpCode(200)
  async getCountryAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: CountryValueControlDTO
  ){
    try {
      // console.log("queryParams:", queryParams)
    
      const query: CountryValueControlDTO = { ...queryParams };
      // console.log("query in controller:", query)
  
      const response = await this.CountryService.getCountryAll(query)
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}
