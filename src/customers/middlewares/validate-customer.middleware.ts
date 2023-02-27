import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";


@Injectable()
export class validateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
      const { authorization } = req.headers;
      if (!authorization) {
          return res.status(403).json({ message: 'Unauthorized' });
      } 
      if (authorization === '123') {
        next()
      } else {
        return res.status(403).json({ message: 'Invalid authorization Unauthorized' });
      }
     
  }
} 