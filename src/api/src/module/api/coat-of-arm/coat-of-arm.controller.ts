import { Controller, Res, Get, Query, HttpStatus, ValidationPipe, UsePipes, InternalServerErrorException, Version, UseGuards } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { coatOfArmSchema } from './schema/coat-of-arm.schema';
//Service import
import { CoatOfArmService } from './coat-of-arm.service';
//DTO import
import { CoatOfArmValueControlDTO } from './dto/coat-of-arm.dto';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';
//Guard import
import { AuthGuard } from 'src/module/auth/guard/auth-token-api.guard';

@UseGuards(AuthGuard)
@Controller(`coat-of-arm`)
export class CoatOfArmController {
  constructor(
    private readonly CoatOfArmService: CoatOfArmService
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(coatOfArmSchema))
  async getFlagAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: CoatOfArmValueControlDTO
  ){
    try {
      const query: CoatOfArmValueControlDTO = { ...queryParams };

      const response = await this.CoatOfArmService.getCoatOfArmAll(query);
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Get('details')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(coatOfArmSchema))
  async getFlagDetails(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: CoatOfArmValueControlDTO
  ){
    try {
      const query: CoatOfArmValueControlDTO = { ...queryParams };

      const response = await this.CoatOfArmService.getCoatOfArmDetails(query);
      // console.log("response:", response)

      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}