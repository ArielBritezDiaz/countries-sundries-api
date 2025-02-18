import { Injectable, InternalServerErrorException, Logger, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
//DTO import
import { SignUpUserDTO } from "./dto/user.dto";
import { SignInUser } from "./interface/user.interface";
//Hashing import
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

import * as moment from 'moment';
import { EntityManager, Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

//CRUD Operations
@Injectable()
export class UserService {
  constructor(
    // private readonly entityManager: EntityManager,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async signUpUser(body: SignUpUserDTO): Promise<number> {
    
    console.log("user.service-----------------------------------------------")
    console.log("body in signUpUser:", body)

    const passw = body.password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)

    const existsUser = await this.userRepository.findOne({
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
          const user = await this.userRepository.save(body);
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
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    })

    if(!user) throw new UnauthorizedException('User does not exist')
    
    return user
  }

  async getUser(id_user: number): Promise<any> {
    const userExists = await this.userRepository.findOne({
      where: {
        id_user: id_user
      },
      select: ['name', 'email', 'created_at']
    })

    console.log("userExists in getUser:", userExists)

    const user = {
      name: userExists.name,
      email: userExists.email,
      created_at: moment(userExists.created_at).format('YYYY-MM-DD HH:mm')
    }

    if(!userExists) throw new UnauthorizedException('User does not exist')
    
    return user
  }

  async test(name: string): Promise<any> {
    const test = await this.userRepository.findOne({where: {name}})
    Logger.log('Regions:', JSON.stringify(test), 'RegionService');
    console.log("test in userService:", test)
    return test
  }
}