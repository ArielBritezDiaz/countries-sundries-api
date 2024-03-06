import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { UserDetails } from "../dto/auth.dto";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super()
  }

  serializeUser(user: UserDetails, done: Function) {
    console.log('SerializeUser')
    console.log('user:', user)
    done(null, user)
  }

  async deserializeUser(payload: any, done: Function) {
    console.log('DeserializeUser')
    console.log('payload:', payload)
    const user = await this.authService.findUser(payload.id_user)
    console.log('user:', user)
    
    return user ? done(null, user) : done(null, null)
  }
}