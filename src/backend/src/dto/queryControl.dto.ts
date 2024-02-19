import { Injectable } from "@nestjs/common";
import { IsDefined, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

@Injectable()
export class ValueQueryControl {
  @IsDefined()
  @IsString()
  value: string;
}

@Injectable()
export class CurrenciesValueQueryControl {
  @IsOptional()
  @IsInt()
  from?: number;

  @IsOptional()
  @IsInt()
  take?: number;
}

@Injectable()
export class CurrencyValueQueryControl {
  @IsOptional()
  @IsInt()
  id_currency?: number;

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