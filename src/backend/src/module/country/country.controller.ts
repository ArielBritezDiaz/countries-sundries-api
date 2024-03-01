import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common'
import { Response } from 'express'
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard'
//Service import
import { CountryService } from './country.service'
//DTO import
import { CountryValueControlDTO } from './dto/country.dto'
//Validation import
import { ZodValidationPipe } from './pipe/country.validation.pipe';
import { countrySchema } from './schema/country.schema';

@Controller(`api/${process.env.API_VERSION}/country`)
@UseGuards(new ApiKeyGuard())
export class CountryController {
  constructor(
    private readonly CountryService: CountryService
  ) {}

  @Get('all')
  @UsePipes(new ZodValidationPipe(countrySchema))
  @UsePipes(new ValidationPipe({transform: true}))
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
      return res.status(500).send({message: "Internal server error"})
    }
  }
}