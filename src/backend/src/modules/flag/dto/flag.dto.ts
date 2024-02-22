import { Injectable } from "@nestjs/common";
import { IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class FlagValueControlDTO {
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
  type: string;

  @IsOptional()
  @IsString()
  order_by?: string;

  @IsOptional()
  @IsString()
  order_direction?: string;
}