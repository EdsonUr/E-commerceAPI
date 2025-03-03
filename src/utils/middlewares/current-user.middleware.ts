import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { isArray } from "class-validator";
import { JsonWebTokenError, verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { UsersService } from "src/users/users.service";
import { UserEntity } from "src/users/entities/user.entity";

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserEntity | null;
        }
    }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware{

  constructor(private usersService:UsersService) {}

  async use(req: Request, res: Response, next: () => void) {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || isArray(authHeader) || !authHeader.startsWith('Bearer')) {
        req.currentUser = null;
        next();
        return;
    }else {
        const token = authHeader.split(' ')[1];

        if(!process.env.JWT_SECRET){
            throw new Error('JWT_SECRET is not defined in the environment variable');
        }

        try{
            const {id} = <JwtPayload>verify(token, process.env.JWT_SECRET);
            const currentUser = await this.usersService.findOne(+id);
            req.currentUser = currentUser
            next();
        }catch(err){
            req.currentUser = null;
            next();
        }
    }
  }
}

interface JwtPayload {
    id: string;
}