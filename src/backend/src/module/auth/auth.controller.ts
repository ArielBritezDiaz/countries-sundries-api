import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post, UnauthorizedException, UseGuards, Request, Req } from '@nestjs/common'
import { Response } from 'express';
//Service import
import { AuthService } from './auth.service';
//Interface import
import { SignInUserDTO } from '../user/dto/user.dto';
import { ZodValidationPipe } from 'src/pipe/body-params.pipe';
import { signInUserSchema } from '../user/schema/user.schema';
import { AuthGuard } from './guard/auth-token-api.guard';
import { GoogleAuthGuard } from './guard/google-strategy.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleLogIn(
    @Res() res: Response
  ) { 
    try {
      // const response = await this.authService.googleLogIn();
      // return res.status(HttpStatus.OK).send(response);
      return { message: 'Google Log In'}
    } catch(error) {
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async googleRedirect() {
    try {
      return { message: 'Google Redirect' }
    } catch(error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  @Get('status')
  async status(
    @Res() res: Response,
    @Req() req: Request //& { user: any }
  ) {
    try {
      if(req['user'] !== undefined) {
        console.log("req.user:", req['user'].id_user)
        return res.send({ message: 'Status' })
      } else {
        return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Unauthorized' })
      }
    } catch(error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
 
  @Post('sign-in')
  @UsePipes(new ZodValidationPipe(signInUserSchema))
  async signIn(
    @Res() res: Response,
    @Body() body: SignInUserDTO
  ) {
    try {
      const response = await this.authService.authSignUpUser(body);
      return res.status(HttpStatus.OK).send(response);
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.log(error);
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  @Version(['1'])
  async profile(
    @Res() res: Response,
    @Request() req
  ) {
    try {
      const { id_user, email } = req.user;

      const reqData = {
        id_user,
        email
      }
      console.log("id_user:", id_user)
      console.log("email:", email)
      const user = await this.authService.profileUser(reqData);
      // console.log("req:", req)
      return res.status(HttpStatus.OK).send(user);
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }
}