import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { Observable } from "rxjs";

@Injectable()
export class TokenValidateGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<FastifyRequest>()
    const reqToken = req['user'].id_user
    console.log('reqToken:', reqToken)
    return true
  }
}