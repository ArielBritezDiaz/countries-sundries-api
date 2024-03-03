import { Injectable } from "@nestjs/common";
import { IsDefined, IsString } from 'class-validator';

@Injectable()
export class ValueQueryControl {
  @IsDefined()
  @IsString()
  value: string;
}