// import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
// import { FastifyRequest } from "fastify";
// import { Observable } from "rxjs";

// @Injectable()
// export class ApiVersionGuard implements CanActivate {
//   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest<FastifyRequest>()
//     const requestedVersion = req.headers['x-api-version']

//     if(!requestedVersion || !SUPPORTED_VERSIONS.includes(requestedVersion)) {
//       return false
//     }

//     return true
//   }
// }
