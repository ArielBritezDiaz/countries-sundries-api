import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class ImageQueryControlDTO {
  @IsOptional()
  @IsString()
  id?: number;
  
  @IsOptional()
  @IsString()
  name?: string;
}