import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, Response: any, next: NextFunction) {
    console.log('Request body@@', req.body);
    next();
  }
}
