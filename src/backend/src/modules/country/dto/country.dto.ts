import { Injectable } from "@nestjs/common";
import { IsInt, IsOptional, IsString } from 'class-validator';


@Injectable()
export class CountryValueControlDTO {
  @IsOptional()
  @IsInt()
  from: number;

  @IsOptional()
  @IsInt()
  take: number;

  @IsOptional()
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  official_name: string;

  @IsOptional()
  @IsString()
  abbr: string;

  @IsOptional()
  @IsString()
  internet_tld: string;

  @IsOptional()
  @IsString()
  motto: string;

  @IsOptional()
  @IsString()
  anthem: string;

  @IsOptional()
  @IsString()
  capital: string;

  @IsOptional()
  @IsString()
  official_language: string;

  @IsOptional()
  @IsString()
  iso_3166_1_alpha_2: string;

  @IsOptional()
  @IsString()
  iso_3166_1_alpha_3: string;

  @IsOptional()
  @IsString()
  calling_code: string;

  @IsOptional()
  @IsString()
  timezone: string;

  @IsOptional()
  @IsInt()
  id_coat_of_arms_fk: number;

  @IsOptional()
  @IsString()
  coat_of_arms_name: string;

  @IsOptional()
  @IsString()
  coat_of_arms_type: string;

  @IsOptional()
  @IsInt()
  id_flag_fk: number;

  @IsOptional()
  @IsString()
  flag_name: string;

  @IsOptional()
  @IsString()
  flag_type: string;

  @IsOptional()
  @IsInt()
  id_currency_fk: number;

  @IsOptional()
  @IsString()
  currency_abbr: string;

  @IsOptional()
  @IsString()
  currency_name: string;

  @IsOptional()
  @IsInt()
  id_region_fk: number;

  @IsOptional()
  @IsString()
  region_name: string;

  @IsOptional()
  @IsInt()
  id_sub_region_fk: number;

  @IsOptional()
  @IsString()
  sub_region_name: string;

  @IsOptional()
  @IsString()
  order_by: string;

  @IsOptional()
  @IsString()
  order_direction: string;
}