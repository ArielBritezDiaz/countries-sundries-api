import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class ValueQueryControl {
  @IsDefined()
  @IsString()
  value: string;
}