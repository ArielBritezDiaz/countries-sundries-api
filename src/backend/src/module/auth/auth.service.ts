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
    if(user) {
      return user
    }

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
    console.log("id_user findUser:", id_user)
    const user = await this.prismaService.user.findUnique({
      where: {
        id_user
      }
    })
    return user
  }

  async getToken(user: any) {
    // console.log("user:", user)
    const id_user = user.id_user
    const payload = { id_user }
    console.log("payload:", payload)

    const access_token = await this.jwtService.signAsync(payload)

    const response = {
      user,
      access_token
    }

    return response
  }

  async authSignInUser(body: SignInUser): Promise<AuthDTO> {

    const user = await this.UserService.signInUser(body)
    const bcryotResult = await bcrypt.compare(body.password, user.password)

    if(!bcryotResult) throw new UnauthorizedException('Password is incorrect')

    const payload = { id_user: user.id_user }
    const access_token = await this.jwtService.signAsync(payload)

    const response = {
      user,
      access_token
    }

    console.log("user:", user)
    return response
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      const payload = await this.jwtService.verifyAsync(token)
      console.log("payload:", payload)
      return true
    } catch(error) {
      console.error(error)
      return false
    }
  }

  async profileUser(data: any) {
    console.log("profile service:", data)
    const id_user = data.id_user
    const access_token = data.access_token

    const isTokenValid = await this.verifyToken(access_token);
    const status = isTokenValid ? 'Active' : 'Deprecated'
    
    const user = await this.prismaService.user.findUnique({
      where: {
        id_user
      },
      select: {
        name: true,
        email: true,
        created_at: true
      }
    })

    const profile = {
      user,
      token: {
        access_token,
        status
      }
    }

    return profile
  }
}