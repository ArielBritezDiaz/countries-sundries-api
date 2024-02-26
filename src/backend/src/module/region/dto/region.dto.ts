import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class RegionsValueControlDTO {
  @IsOptional()
  @IsInt()
  from?: number;

  @IsOptional()
  @IsInt()
  take?: number;

  @IsOptional()
  @IsString()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  order_by?: string;

  @IsOptional()
  @IsString()
  order_direction?: string;
}