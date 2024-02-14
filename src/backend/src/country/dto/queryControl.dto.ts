import { Injectable } from "@nestjs/common";
import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class QueryControl {
  @IsString()
  @Type(() => String)
  country: string;
}