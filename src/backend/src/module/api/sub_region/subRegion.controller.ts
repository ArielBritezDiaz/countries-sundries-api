import { Controller, Res, Get, Query, HttpStatus, UseGuards, UsePipes, ValidationPipe, HttpException, InternalServerErrorException, Version } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { subRegionSchema } from './schema/sub_region.schema';
//Service import
import { SubRegionService } from './subRegion.service';
//DTO import
import { SubRegionsValueControlDTO } from './dto/subRegion.dto';
//Pipe import
import { ZodValidationPipe } from '../../../pipe/query-params.pipe';

@Controller(`sub_region`)
export class SubRegionController {
  constructor(
    private readonly SubRegionService: SubRegionService
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(subRegionSchema))
  async getAllSubRegions(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: SubRegionsValueControlDTO
  ){
    try {
      const query: SubRegionsValueControlDTO = { ...queryParams };

      const response = await this.SubRegionService.getAllSubRegions(query);

      return res.status(HttpStatus.OK).send(response);
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}