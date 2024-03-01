import { Controller, HttpCode, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, HttpException, InternalServerErrorException, Version, Inject } from '@nestjs/common'
import { Response } from 'express'
//Service import
import { CountryService } from './country.service'
//DTO import
import { CountryValueControlDTO } from './dto/country.dto'
//Validation import
import { ZodValidationPipe } from '../../pipe/query-params.pipe';
import { countrySchema } from './schema/country.schema';
//Caching import
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { caching } from 'cache-manager';

@Controller('country')
export class CountryController {
  constructor(
    private readonly CountryService: CountryService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(countrySchema))
  @HttpCode(200)
  async getCountryAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: CountryValueControlDTO
  ){
    try {
      // console.log("queryParams:", queryParams)
      
      const cacheExists = await this.cacheManager.get('data-countries')
      if(cacheExists) {
        console.log('Data from countries exists in cache')
        console.log("sending...:", cacheExists)
        return res.status(HttpStatus.OK).send(cacheExists)
      }

      const query: CountryValueControlDTO = { ...queryParams };
      // console.log("query in controller:", query)

      const response = await this.CountryService.getCountryAll(query)
      // Save data from countries in cache
      if(response !== cacheExists) {
        console.log("response.length:", response.length)
        await this.cacheManager.set('data-countries', response)
        console.log('Data from countries saved in cache:', cacheExists)
      }

      // console.log("response:", response)

      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}
