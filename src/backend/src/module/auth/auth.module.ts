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

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '180s' }
    })
  ],
  providers: [AuthService, UserService, GoogleStrategy, SessionSerializer, {
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  }],
  controllers: [AuthController],
})

export class AuthModule {}