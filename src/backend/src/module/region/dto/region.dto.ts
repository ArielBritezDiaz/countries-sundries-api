import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

@Injectable()
export class RegionsValueControlDTO {
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
  order_by?: string;

  @IsOptional()
  @IsString()
  order_direction?: string;
}