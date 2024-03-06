import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // console.log("value from zod validation pipe:", value)
      // console.log("metadata from zod validation pipe:", metadata)
      // console.log("schema from zod validation pipe:", this.schema)
      const parsedValue = this.schema.parse(value);
      return parsedValue
    } catch (error) {
      throw new BadRequestException('Validation query params failed');
    }
  }
}