import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


@Injectable()
export class ValidateCustomerAcountMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {
        const { valid } = req.headers
        if(valid) {
            next()
        } else {
            res.status(403).json({ message: 'Account invaliid' })
        }
    }
    
}