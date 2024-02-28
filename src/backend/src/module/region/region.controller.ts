import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards, ValidationPipe, UsePipes, HttpException, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { regionSchema } from './schema/region.schema';
//Service import
import { RegionService } from './region.service';
//DTO import
import { RegionsValueControlDTO } from './dto/region.dto';
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';

@Controller(`api/${process.env.API_VERSION}/region`)
@UseGuards(new ApiKeyGuard())
export class RegionController {
  constructor(
    private readonly RegionService: RegionService
  ) {}

  @Get('all')
  @UsePipes(new ZodValidationPipe(regionSchema))
  @HttpCode(200)
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