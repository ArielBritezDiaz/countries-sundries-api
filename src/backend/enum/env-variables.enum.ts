import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ENVVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  PROTOCOL: string;

  @IsNotEmpty()
  API_VERSION: string;

  @IsNotEmpty()
  API_KEY_HEADER: string;

  @IsNotEmpty()
  API_KEY_TEMPORAL: string;

  @IsNotEmpty()
  DB_NAME: string;

  @IsNotEmpty()
  DB_HOST: string;

  @IsNumber()
  DB_PORT: number;

  @IsNotEmpty()
  DB_USER: string;

  @IsOptional()
  DB_PASSW?: string;

  @IsNotEmpty()
  DATABASE_URL: string;
}