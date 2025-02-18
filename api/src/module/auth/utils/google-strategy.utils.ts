import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { validateGoogleStrategyDTO } from '../dto/auth.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.PROTOCOL}://${process.env.HOST}/api/v1/auth/google/redirect`,
      // callbackURL: `http://localhost:3000/api/v1/auth/google/redirect`,
      scope: ['email', 'profile'],
    })
  }

  async validate(access_token: string, refresh_token: string, profile: any){
    console.log("!---------------------------------------------------------!")
    console.log("access_token:", access_token)
    console.log("refresh_token:", refresh_token)
    console.log("profile:", profile)
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      name: profile.displayName
    })

    console.log("!---------------------------------------------------------!")
    console.log('Validate')
    console.log('user:', user)
    return user || null;
  }
}