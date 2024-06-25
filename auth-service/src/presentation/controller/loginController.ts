import { Dependencies } from "../../_boot/dependecies";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const loginController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { loginUseCase } } = Dependencies ;
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            
            const  { email , password } = req.body

            const  user = await loginUseCase( Dependencies ).execute( email , password ) ;

            if(!user||user.isGauth){

              return res.status(200).json( { 

                    success: false,
                    data: {},
                    message: " incorrect password or Email address ", 
                } )

               
            }

            const accessToken = generateAccessToken({
                _id : String(user._id) ,
                email : user.email ,
                role : user.role  
            })

            const refreshToken = generateRefreshToken({
                _id : String(user._id) ,
                email : user.email ,
                role : user.role  
            })

            res.cookie('access_token' , accessToken , { httpOnly : true } )

            res.cookie('refresh_token' , refreshToken , { httpOnly : true } )


           return  res.status(200).json( { 

                    success: true,
                    data: user,
                    message: " User logged in successfully  ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from  login Controller', error )
            next(error)
        }
    }
}