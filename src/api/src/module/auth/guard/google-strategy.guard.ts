import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    const activate = await super.canActivate(context) as boolean
    const req = context.switchToHttp().getRequest()
    
    await super.logIn(req)

    return activate
  }
}