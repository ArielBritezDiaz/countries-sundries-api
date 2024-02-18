import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class QueryControl {
  @IsDefined()
  @IsString()
  country: string;
}