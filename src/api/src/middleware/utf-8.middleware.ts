import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class UTF8Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    res.charset = 'UTF-8';
    next();
  }
}