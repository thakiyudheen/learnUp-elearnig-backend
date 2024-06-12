import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { Dependencies } from "../../_boot/dependecies";
import { hashPassword } from "../../_lib/http/bcrypt";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import { createUserProducer } from "../../infrastructure/kafka/producer/createUserProducer";


export const signupController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createUserUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')

            req.body.password = await hashPassword( req.body.password ) ;

           
            const  user = await createUserUseCase( Dependencies ).execute( req.body )


            if(!user){
              return res.status(500).json( { 

                    success: false,
                    data: {},
                    message: " User creation failed ", 
                } )
            }else {
                
                // create user using  kafka producer---------- 
                await createUserProducer(user)

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

                return  res.status(201).json( { 

                    success: true,
                    data: user,
                    message: "User created successfully", 

                } )
            }
           

        } catch ( error : any ) {
           
            console.log('error from signup controller', error )
            next(error)
        }
    }
}