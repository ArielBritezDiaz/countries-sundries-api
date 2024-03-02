import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

@Injectable()
export class CurrenciesValueControlDTO {
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
  name: string;

  @IsOptional()
  @IsString()
  abbr: string;

  @IsOptional()
  @IsString()
  symbol: string;

  @IsOptional()
  @IsString()
  order_by: string;

  @IsOptional()
  @IsString()
  order_direction: string;
}

@Injectable()
export class CurrencyValueControlDTO {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  abbr?: string;

  @IsOptional()
  @IsString()
  symbol?: string;
}