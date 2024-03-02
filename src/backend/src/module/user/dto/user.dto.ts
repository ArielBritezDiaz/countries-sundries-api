import { Injectable } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsString } from 'class-validator';

@Injectable()
export class UserDTO {
  @IsString()
  @Type(() => String)
  username: string;

  @IsString()
  @Type(() => String)
  email: string;

  @IsString()
  @Type(() => String)
  password: string;
}