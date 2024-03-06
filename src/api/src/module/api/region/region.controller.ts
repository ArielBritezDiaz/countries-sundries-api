import { Controller, Res, Get, Query, HttpStatus, UseGuards, ValidationPipe, UsePipes, HttpException, InternalServerErrorException, Version } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { regionSchema } from './schema/region.schema';
//Service import
import { RegionService } from './region.service';
//DTO import
import { RegionsValueControlDTO } from './dto/region.dto';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';
//Guard import
import { AuthGuard } from 'src/module/auth/guard/auth-token-api.guard';

@UseGuards(AuthGuard)
@Controller(`region`)
export class RegionController {
  constructor(
    private readonly RegionService: RegionService
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(regionSchema))
  async getAllRegions(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: RegionsValueControlDTO
  ){
    try {
      const query: RegionsValueControlDTO = { ...queryParams };

      const response = await this.RegionService.getAllRegions(query);
      // console.log("response", response)

      return res.status(HttpStatus.OK).send(response);
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}