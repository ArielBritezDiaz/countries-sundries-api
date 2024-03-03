import { Controller, Res, Get, Query, HttpStatus, ValidationPipe, UsePipes, InternalServerErrorException, Version, UseGuards } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { flagSchema } from './schema/flag.schema';
//Service import
import { FlagService } from './flag.service';
//DTO import
import { FlagValueControlDTO } from './dto/flag.dto';
//Pipe import
import { ZodValidationPipe } from 'src/pipe/query-params.pipe';
//Guard import
import { AuthGuard } from 'src/module/auth/guard/auth-token-api.guard';

@UseGuards(AuthGuard)
@Controller(`flag`)
export class FlagController {
  constructor(
    private readonly FlagService: FlagService
  ) {}

  @Get('all')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(flagSchema))
  async getFlagAll(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: FlagValueControlDTO
  ){
    try {
      const query: FlagValueControlDTO = { ...queryParams };

      const response = await this.FlagService.getFlagAll(query);
      // console.log("response:", response)
      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Get('details')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(flagSchema))
  async getFlagDetails(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: FlagValueControlDTO
  ){
    try {
      const query: FlagValueControlDTO = { ...queryParams };

      const response = await this.FlagService.getFlagDetails(query);
      // console.log("response:", response)

      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}