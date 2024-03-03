import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post, UnauthorizedException } from '@nestjs/common'
import { Response } from 'express';
//Service import
import { UserService } from './user.service';
//DTO import
import { SignUpUserDTO, SignInUserDTO } from './dto/user.dto';
import { ZodValidationPipe } from 'src/pipe/body-params.pipe';
import { SignUpUserSchema, signInUserSchema } from './schema/user.schema';


@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
  ) {}

  @Post('sign-up')
  @UsePipes(new ZodValidationPipe(SignUpUserSchema))
  async createUser(
    @Res() res: Response,
    @Body() body: SignUpUserDTO
  ) {
    try {
      console.log("llega")
      const bodyReq: SignUpUserDTO = {...body}
      // console.log(bodyReq)

      const response = await this.UserService.signUpUser(bodyReq)
      // console.log("response in front:", response)
      if(!response) {
        return res.status(HttpStatus.CONFLICT).send('User already exists')
      }

      return res.status(HttpStatus.CREATED).send('User created successfully')
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }

  @Post('sign-in')
  @UsePipes(new ZodValidationPipe(signInUserSchema))
  async signIn(
    @Res() res: Response,
    @Body() body: SignInUserDTO
  ) {
    try {
      const bodyReq: SignInUserDTO = {...body}

      const response = await this.UserService.signInUser(bodyReq)
      
      if(!response) {
        throw new UnauthorizedException('User does not exist')
      }

      return res.status(HttpStatus.OK).send(response)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}
