import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, UseGuards } from '@nestjs/common'
import { Response } from 'express';
//Service import
import { CountryService } from './country.service';
//DTO import
import { CountryValueControlDTO } from './dto/country.dto';
//Validation import
import { ZodValidationPipe } from '../../../pipe/query-params.pipe';
//Schema import
import { countrySchema } from './schema/country.schema';
//Guard import
import { AuthGuard } from 'src/module/auth/guard/auth-token-api.guard';

@UseGuards(AuthGuard)
@Controller('country')
export class CountryController {
  constructor(
    private readonly CountryService: CountryService,
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(countrySchema))
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
