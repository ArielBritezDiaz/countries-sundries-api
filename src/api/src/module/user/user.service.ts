import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { SignUpUserDTO } from "./dto/user.dto";
import { SignInUser } from "./interface/user.interface";
//Hashing import
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

//CRUD Operations
@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
    private readonly jwtService: JwtService,
  ) {}


  async signUpUser(body: SignUpUserDTO): Promise<number> {
    
    console.log("user.service-----------------------------------------------")
    console.log("body in signUpUser:", body)

    const passw = body.password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)

    const existsUser = await this.prismaService.user.findUnique({
      where: {
        email: body.email
      }
    })
    console.log("existsUser:", existsUser)

    if(existsUser) throw new UnauthorizedException('User already exists')

    return new Promise<any>((resolve, reject) => {
      bcrypt.hash(passw, saltRounds, async (err: string, hash: string) => {
        if (err) {
          reject(new InternalServerErrorException('Error hashing password'));
          return
        }
  
        body.password = hash;
        console.log("body:", body);
        try {
          const user = await this.prismaService.user.create({
            data: {
              ...body,
            }
          });
          console.log("response:", user);
  
          if (user) {
            resolve(user);
          } else {
            reject(new InternalServerErrorException());
          }
        } catch(error) {
          console.error(error)
          reject(new InternalServerErrorException());
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
    
    return user
  }
}