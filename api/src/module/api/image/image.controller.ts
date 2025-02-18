import { Controller, HttpCode, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, UseGuards } from '@nestjs/common';
import { Response } from 'express';
//Schema import
import { imageFlagSchema } from './schema/flag-image.schema';
import { imageCoatOfArmSchema } from './schema/coat-of-arm-image.schema';
//Service import
import { FlagService, CoatOfArmService } from './image.service';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';
//Validation import
import { ZodValidationPipe } from '../../../pipe/query-params.pipe';
//Guard import
import { AuthGuard } from '../../auth/guard/auth-token-api.guard';

@UseGuards(AuthGuard)
@Controller(`image`)
export class ImageController {
    constructor(
      private readonly FlagService: FlagService,
      private readonly CoatOfArmService: CoatOfArmService
    ) {}

  @Get('flag')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(imageFlagSchema))
  @HttpCode(200)
  async getFlag(
    @Res() res: Response,
    // @Headers(`${process.env.API_KEY_HEADER}`) apiKeyHeader: apiKeyDTO['apiKey'],
    @Query(new ValidationPipe({transform: true})) queryParams: ImageQueryControlDTO
  ){
    try {
      const query: ImageQueryControlDTO = { ...queryParams };

      const response = await this.FlagService.getFlag(query);
      // console.log("response client:", response);

      const flag = response && response.length > 0 && response[0]?.url ? response[0].url : null;

      if(flag !== null) {
        return res.sendFile(flag, { root: 'assets/flag' });
      } else {
        return res.status(HttpStatus.NOT_FOUND).send([]);
      }
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Get('coat-of-arm')
  @Version(['1']) // here set the version of this method of this controller accept, in this case, this method accept version 1. With the array, is possible implement more than one version in the same method.
  @UsePipes(new ZodValidationPipe(imageCoatOfArmSchema))
  async getCoatOfArms(
    @Res() res: Response,
    @Query(new ValidationPipe({transform: true})) queryParams: ImageQueryControlDTO
  ){
    try {
      const query: ImageQueryControlDTO = { ...queryParams };
      
      const response = await this.CoatOfArmService.getCoatOfArm(query);
      // console.log("response client:", response);

      const coatOfArm = response && response.length > 0 && response[0]?.url ? response[0].url : null;

      if(coatOfArm !== null) {
        return res.sendFile(coatOfArm, { root: 'assets/coat_of_arms' });
      } else {
        return res.status(HttpStatus.NOT_FOUND).send([]);
      }
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}