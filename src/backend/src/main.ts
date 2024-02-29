import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as express from 'express';
//Guard import
import { ApiKeyGuard } from './guard/api-key.guard';
//Pipe import
import { ValidationPipe, VersioningType } from '@nestjs/common';
//Fastify platfom for versioning API
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { FastifyRequest } from 'fastify';

//Extractor for the API versioning
const DEFAULT_VERSION = '1';
const MAX_VERSION = 1;

const extractor = (req: FastifyRequest): string | string[] => {
  const requestedVersion = req.headers['x-api-version'];
  console.log('Requested version:', requestedVersion);
  const versionCount = Number(requestedVersion) || 1; // Si 'requestedVersion' no es un número válido, se usa 1 por defecto
  
  // Verificar si la versión solicitada está dentro del rango permitido
  if (versionCount > MAX_VERSION || versionCount < 1) {
    // Si la versión no está dentro del rango permitido, devolver un arreglo vacío o cualquier otro valor que desees
    return [];
  }
  
  // Generar un arreglo con las versiones desde 'N' hasta '1'
  return Array.from({ length: versionCount }, (_, i) => `${versionCount - i}`).reverse();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor,
    // defaultVersion: DEFAULT_VERSION
  })
  //Guard use
  app.useGlobalGuards(new ApiKeyGuard());
  //Pipe use
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: { enableImplicitConversion: true }
  }));
  //Middleware
  app.use(cors())
  app.use(express.urlencoded({ extended: true }));
  await app.listen(3000);  
}
bootstrap();