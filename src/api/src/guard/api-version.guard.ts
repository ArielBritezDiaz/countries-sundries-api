import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { Observable } from "rxjs";

@Injectable()
export class ApiVersionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<FastifyRequest>();
    const requestedVersion = req.headers['x-api-version'];

    const SUPPORTED_VERSIONS = ['1']; // This is the supported versions of the API, same as the defaultVersion in main.ts

    // This is the requested URL
    const requestUrl = req.url;

    // This is the list of excluded URLs
    const excludedUrls = ['/v1/auth/google/login', 'v1/auth/google/redirect','/v1/user/profile', '/v1/user/test'];

    // This is the check if the requested URL is in the excluded URLs
    const isExcludedUrl = excludedUrls.some((excludedUrl) => requestUrl.includes(excludedUrl));

    // If the requested URL is in the excluded URLs, return true. This means that the request will continue to the next middleware
    if (isExcludedUrl) {
      return true;
    }

    if (!requestedVersion || !SUPPORTED_VERSIONS.includes(requestedVersion.toString())) {
      console.log('Unsupported version');
      console.log('requestedVersion:', requestedVersion);
      throw new UnauthorizedException('API version incorrect');
    }
    // console.log('Supported version');
    // console.log('requestedVersion:', requestedVersion);
    return true;
  }
}
