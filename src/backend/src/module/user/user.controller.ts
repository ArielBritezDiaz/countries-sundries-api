import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post, UnauthorizedException } from '@nestjs/common'
import { Response } from 'express';
//Service import
import { UserService } from './user.service';
//DTO import
import { SignUpUserDTO } from './dto/user.dto';
import { ZodValidationPipe } from 'src/pipe/body-params.pipe';
import { SignUpUserSchema } from './schema/user.schema';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  @UsePipes(new ZodValidationPipe(SignUpUserSchema))
  async signUp(
    @Res() res: Response,
    @Body() body: SignUpUserDTO
  ) {
    try {
      const response = await this.userService.signUpUser(body);
      return res.status(HttpStatus.CREATED).send(response);
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }
}