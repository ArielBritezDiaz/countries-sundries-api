import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/auth.constants';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(req)

    console.log(req)

    if(!token) {
      // console.log(req['user'])
      console.log(req['Symbol(kHeaders'])
      throw new UnauthorizedException()
    }

    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      )

      req['user'] = payload
    } catch(error) {
      console.log(error)
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    const api_token = process.env.API_KEY_HEADER
    const [ type, token ] = req.headers[api_token]?.toString().split(' ') ?? []
    return type == 'Bearer' ? token : undefined
  }
}