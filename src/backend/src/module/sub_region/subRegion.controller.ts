import { Controller, HttpCode, Res, Get, Query, HttpStatus, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { subRegionSchema } from './schema/sub_region.schema';
//Service import
import { SubRegionService } from './subRegion.service';
//DTO import
import { SubRegionsValueControlDTO } from './dto/subRegion.dto';
//Guard import
import { ApiKeyGuard } from '../../guard/api-key.guard';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';

@Controller(`api/${process.env.API_VERSION}/sub_region`)
@UseGuards(new ApiKeyGuard())
export class SubRegionController {
  constructor(
    private readonly SubRegionService: SubRegionService
  ) {}

  @Get('all')
  @UsePipes(new ZodValidationPipe(subRegionSchema))
  @HttpCode(200)
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
      return res.status(500).send({message: "Internal server error"})
    }
  }
}