import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassCountry {
  apiKey: string;
  country: string;
}