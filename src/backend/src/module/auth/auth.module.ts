import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
//JWT Module import
import { JwtModule } from "@nestjs/jwt";
//JWT Constants import
import { jwtConstants } from "./constants/auth.constants";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '180s' }
    })
  ],
  providers: [AuthService, UserService, JwtModule],
  controllers: [AuthController],
})

export class AuthModule {}