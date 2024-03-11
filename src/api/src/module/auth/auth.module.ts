import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
//JWT Module import
import { JwtModule } from "@nestjs/jwt";
//JWT Constants import
import { jwtConstants } from "./constants/auth.constants";
import { GoogleStrategy } from "./utils/google-strategy.utils";
import { SessionSerializer } from "./utils/serializer.auth";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    UserModule,
    PassportModule.register({ session: true }),
    //JWT Config
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10m' }, // this is 10 minute, the config por one year is "6M"
    }),
  ],
  providers: [AuthService, UserService, GoogleStrategy, SessionSerializer, {
    //AuthService Provider
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  }],
  controllers: [AuthController],
})

export class AuthModule {}