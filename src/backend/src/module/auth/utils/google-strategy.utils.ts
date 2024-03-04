import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { validateGoogleStrategyDTO } from '../dto/auth.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/v1/auth/google/redirect',
      scope: ['email', 'profile'],
    })
  }

  async validate(access_token: string, refresh_token: string, profile: any){
    console.log("access_token:", access_token)
    console.log("refresh_token:", refresh_token)
    console.log("profile:", profile)
  }
}