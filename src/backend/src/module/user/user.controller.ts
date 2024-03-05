import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post, UnauthorizedException, Req, Session } from '@nestjs/common'
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
    @Req() req: Request,
    @Body() body: SignUpUserDTO,
    @Session() session: Record<string, any>
  ) {
    try {
      const response = await this.userService.signUpUser(body);
      // console.log("response in CONTROLLER:", response)
      session.new_user = response
      if(response) {
        return res.status(HttpStatus.CREATED).redirect('http://localhost:3000/api/v1/auth/redirect-profile');
      } else {
        throw new InternalServerErrorException();
      }
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }
}