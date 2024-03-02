import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { UserDTO } from "./dto/user.dto";
//Hashing import
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
  ) {}


  async createUser(body: UserDTO): Promise<any> {
    const passw = body.password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)

    const existsUser = await this.prismaService.user.findUnique({
      where: {
        email: body.email
      }
    })
    // console.log("existsUser:", existsUser)

    if(existsUser) {
      return await false
    }

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
}