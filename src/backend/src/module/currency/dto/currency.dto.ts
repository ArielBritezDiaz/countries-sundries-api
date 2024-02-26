import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class CurrenciesValueControlDTO {
  @IsOptional()
  @IsInt()
  from?: number;

  @IsOptional()
  @IsInt()
  take?: number;

  @IsOptional()
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