import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const apiKey = request.headers[process.env.API_KEY_HEADER];
    
    if(apiKey !== process.env.API_KEY_TEMPORAL) {
      // console.log("request:", request.headers)
      // console.log("apiKey:", apiKey)
      // console.log("process.env.API_KEY_TEMPORAL:", process.env.API_KEY_TEMPORAL)
      throw new UnauthorizedException('Invalid API Key');
    }
    
    return true
  }
}