import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
  ) {}



}