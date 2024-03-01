import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { Observable } from "rxjs";

@Injectable()
export class ApiVersionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<FastifyRequest>()
    const requestedVersion = req.headers['x-api-version']

    const SUPPORTED_VERSIONS = ['1'] // This is the supported versions of the API, same as the defaultVersion in main.ts

    if(!requestedVersion || !SUPPORTED_VERSIONS.includes(requestedVersion.toString())) {
      console.log('Unsupported version')
      console.log('requestedVersion:', requestedVersion)
      throw new UnauthorizedException('API version incorrect')
    }
    // console.log('Supported version')
    // console.log('requestedVersion:', requestedVersion)
    return true
  }
}
