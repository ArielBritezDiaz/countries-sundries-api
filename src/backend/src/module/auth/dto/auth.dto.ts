import { Profile } from "passport-google-oauth20";

export class AuthDTO {
  access_token: string;
}

export class validateGoogleStrategyDTO {
  access_token: string;
  refresh_token: string;
  profile: Profile;
}