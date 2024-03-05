import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { SignInUser } from "./interface/auth.interface";
//DTO import
import { AuthDTO, UserDetails } from "./dto/auth.dto";
//Hashing import
import * as bcrypt from 'bcrypt';
//JWT import
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "../prisma/prisma.service";
import { GoogleStrategy } from "./utils/google-strategy.utils";

//Authenticator Operations
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private UserService: UserService,
    private jwtService: JwtService,
  ) {}
  
  async validateUser(details: UserDetails) {
    console.log("AuthService", AuthService)
    console.log("details:", details)

    const user = await this.prismaService.user.findUnique({
      where: {
        email: details.email
      }
    })
    
    console.log("user:", user)
    if(user) return user

    console.log('User not found')
    const newUser = this.prismaService.user.create({
      data: {
        name: details.name,
        email: details.email,
        password: null
      }
    })

    return newUser
  }

  async findUser(id_user: number) {
    console.log("id_user:", id_user)
    const user = await this.prismaService.user.findUnique({
      where: {
        id_user
      }
    })
    return user
  }

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

  async profileUser(reqDara: any) {
    const profile = await this.prismaService.user.findMany({
      where: {
        id_user: reqDara.id_user,
        email: reqDara.email
      }
    })
    console.log("profile:", profile)
    return profile
  }
}