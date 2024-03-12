import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post, UnauthorizedException, UseGuards, Request, Req, Session } from '@nestjs/common'
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

  //Register with Google Account OAuth2.0
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleLogIn(
    @Res() res: Response
  ) { 
    try {
      console.log("llega")
      // const response = await this.authService.googleLogIn();
      // return res.status(HttpStatus.OK).send(response);
      console.log("!-----------------------------------------------------------------------------------------!")
      console.log("googleLogIn", res)
      return { message: 'Google Log In'}
    } catch(error) {
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async googleRedirect(
    @Res() res: Response,
    @Req() req: Request,
    @Session() session: Record<string, any>
  ) {
    try {
      console.log("req in googleRedirect--------------------------------------------------")
      console.log(req['user'])

      const user = req['user']
      const response = await this.authService.getToken(user)
      session.id_user = response['user'].id_user
      session.access_token = response.access_token
      console.log("response in googleRedirect:", response)
      console.log("session in googleRedirect:", session)

      const cookieOptions = {
        httpOnly: false,
        secure: true, // Asegúrate de que tu aplicación esté detrás de HTTPS
        // sameSite: 'strict' as const, // O 'lax' según tus necesidades de seguridad
        maxAge: 360000, // Duración de la cookie en segundos
        path: '/profile' // Ruta de la cookie
      };
  
      // Establecer la cookie con el token de acceso
      res.cookie('id_user', response['user'].id_user, cookieOptions);
      res.cookie('access_token', response.access_token, cookieOptions);

      // const data = {
      //   id_user: response['user'].id_user,
      //   access_token: response.access_token
      // }
      // const responseToAstro = await this.authService.profileUser(data)
      // return res.redirect(`/v1/auth/profile`)
      return res.redirect(`http://localhost:4322/profile/`)
      // res.status(HttpStatus.OK).json(req['user']);
    } catch(error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  //Register with Email and Password
  @Post('sign-in')
  @Version(['1'])
  @UsePipes(new ZodValidationPipe(signInUserSchema))
  async signIn(
    @Res() res: Response,
    @Body() body: SignInUserDTO,
    @Session() session: Record<string, any>
  ) {
    try {
      console.log("login in sign-in--------------------------------------------------")
      const response = await this.authService.authSignInUser(body)
      console.log("id_user from login:", response)
      session.id_user = response['user'].id_user
      session.access_token = response.access_token

      
      return res.status(HttpStatus.OK).redirect('/v1/auth/profile')
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.log(error);
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Get('redirect-profile')
  @Version(['1'])
  async redirectProfile(
    @Res() res: Response,
    @Request() req: Request,
    @Query('new_user') new_user: string,
    @Session() session: Record<string, any>
  ) {
    try {
      console.log("redirect-profile---------------------------------------------------")
      console.log(req['session'])
      const user = req['session'].new_user
      console.log("user in redirectProfile:", user)
      const response = await this.authService.getToken(user)
      session.id_user = response['user'].id_user
      session.access_token = response.access_token

      console.log("response in redirectProfile:", response)
      return res.status(HttpStatus.OK).redirect('/v1/auth/profile')
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }

  @Get('profile')
  
  // @Version(['1'])
  async profile(
    @Res() res: Response,
    @Request() req: Request
  ) {
    try {
      console.log("profile-------------------------------------------")
      // console.log(req)
      console.log("nuevas")
      console.log(req['session'])
      let data = {}

      if (req['user']?.id_user !== undefined && req['user']?.access_token !== undefined) {
        console.log("req[user]:", req['user'].id_user)
        data = {
          id_user: req['user'].id_user,
          access_token: req['user'].access_token
        }
      } else if (req['session'].id_user !== undefined && req['session'].access_token !== undefined) {
        console.log("req[session]:", req['session'])
        data = {
          id_user: req['session'].id_user,
          access_token: req['session'].access_token
        }
      } else if(req['session'].passport?.user !== undefined) {
        console.log("if req[session].passport-------------------------------")
        console.log(req['session'].passport)

        data = {
          id_user: req['session'].passport.user.id_user,
          access_token: req['session'].passport.user.access_token
        }
        console.log("data in passport session-------------------------------")
        console.log(data)
      } else {
        throw new UnauthorizedException('User not found');
      }

      
      const user_rofile = await this.authService.profileUser(data)
      console.log("user_rofile:", user_rofile)
      // return res.redirect('http://localhost:4321/profile/')
      return res.status(HttpStatus.OK).json(user_rofile)
    } catch(error) {
      if (error instanceof UnauthorizedException) return res.status(HttpStatus.UNAUTHORIZED).send({ message: error.message })
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
    }
  }
}