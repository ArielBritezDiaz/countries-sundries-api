import { Injectable } from "@nestjs/common";
import { Type, Transform } from "class-transformer";
import { IsNumber, IsInt, IsOptional, IsString } from 'class-validator';

@Injectable()
export class CountryValueControlDTO {
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  from: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  take: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  name: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  official_name: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  abbr: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  internet_tld: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  motto: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  anthem: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  capital: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  official_language: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  iso_3166_1_alpha_2: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  iso_3166_1_alpha_3: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  calling_code: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  timezone: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id_coat_of_arm_fk: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  coat_of_arm_name: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  coat_of_arm_type: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id_flag_fk: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  flag_name: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  flag_type: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id_currency_fk: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  currency_abbr: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  currency_name: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id_region_fk: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  region_name: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  id_sub_region_fk: number;

  @IsOptional()
  @IsString()
  @Type(() => String)
  sub_region_name: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  order_by: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  order_direction: string;
}