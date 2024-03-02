import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
  ) {}


  async 

}