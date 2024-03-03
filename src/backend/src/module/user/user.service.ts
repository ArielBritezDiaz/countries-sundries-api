import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { SignUpUserDTO } from "./dto/user.dto";
//Hashing import
import * as bcrypt from 'bcrypt';
import { SignInUser } from "./interface/user.interface";

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
  ) {}


  async signUpUser(body: SignUpUserDTO): Promise<any> {
    const passw = body.password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)

    const existsUser = await this.prismaService.user.findUnique({
      where: {
        email: body.email
      }
    })
    console.log("existsUser:", existsUser)

    if(existsUser) throw new UnauthorizedException('User already exists')

    return new Promise<boolean>((resolve, reject) => {
      bcrypt.hash(passw, saltRounds, async (err: string, hash: string) => {
        if (err) {
          reject(new InternalServerErrorException());
        }
  
        body.password = hash;
        console.log("body:", body);
  
        const response = await this.prismaService.user.create({
          data: {
            ...body,
          }
        });
        
        console.log("response:", response);
        if (response) {
          resolve(true);
        }
      });
    });
  }

  async signInUser(body: SignInUser): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: body.email
      }
    })

    if(!user) throw new UnauthorizedException('User does not exist')
    
    const bcryotResult = await bcrypt.compare(body.password, user.password)

    if(!bcryotResult) throw new UnauthorizedException('Password is incorrect')

    console.log("user:", user)

    return user
  }
}