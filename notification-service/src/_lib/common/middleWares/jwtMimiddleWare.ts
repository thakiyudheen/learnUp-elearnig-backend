import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv' ;
import { access } from "fs";
import { generateAccessToken } from "@/_lib/utils/http/jwt/generateAccessToken";


config()

interface UserPayload {

    _id: string;
    email: string;
    role: string;

}

declare global {

    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }

}

export const jwtMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
                const { access_token, refresh_token } = req.cookies;

                if(!access_token&&!refresh_token){

                    return next()

                }
                let user ;

                if(access_token){

                    user = await  jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET!) as UserPayload;

                }
                if(!user && refresh_token){

                    user = await jwt.verify(refresh_token, process.env.ACCESS_TOKEN_SECRET!) as UserPayload;

                    if(user){
                    const newAccessToken = generateAccessToken(user);

                    //    create cookie using accestoken ------------
                        res.cookie("access_token", newAccessToken, {
                            httpOnly: true,
                        });

                    }
                }
                
                req.user = user ;
                
                next();
     } catch( error : any ) {

        console.error("Error in JWT middleware:", error);
        next(error); 
        
     }

   
};
