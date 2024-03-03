import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { SignInUser } from "./interface/auth.interface";
//DTO import
import { AuthDTO } from "./dto/auth.dto";
//Hashing import
import * as bcrypt from 'bcrypt';
//JWT import
import { JwtService } from '@nestjs/jwt';

//Authenticator Operations
@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private jwtService: JwtService,
  ) {}

  async authSignUpUser(body: SignInUser): Promise<AuthDTO> {

    const user = await this.UserService.signInUser(body)

    const bcryotResult = await bcrypt.compare(body.password, user.password)

    if(!bcryotResult) throw new UnauthorizedException('Password is incorrect')

    const payload = {
      sub: user.id_user,
      email: user.email
    }

    console.log("user:", user)
    return {
      access_token : await this.jwtService.signAsync(payload)
    }
  }
}