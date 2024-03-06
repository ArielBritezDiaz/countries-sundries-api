import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    morgan((tokens, req, res) => {
      // console.log(tokens)
      return [
        `Request Info: method: ${tokens.method(req, res)} |  url: ${tokens.url(req, res)} | status: ${tokens.status(req, res)} | res(content-length): ${tokens.res(req, res, 'content-length')} | response-time: ${tokens['response-time'](req, res)}ms`
      ]
    })(req, res, next)
  }
}