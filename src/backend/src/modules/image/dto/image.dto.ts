import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class ImageQueryControlDTO {
  @IsDefined()
  @IsString()
  country: string;
}