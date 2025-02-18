import { Injectable } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class ImageQueryControlDTO {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id?: number;
  
  @IsOptional()
  @IsString()
  name?: string;
}