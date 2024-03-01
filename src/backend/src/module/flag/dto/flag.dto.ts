import { Injectable } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class FlagValueControlDTO {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  from?: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  take?: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
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