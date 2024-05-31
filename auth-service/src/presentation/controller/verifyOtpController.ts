import { Dependencies } from "../../_boot/dependecies";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const verifyOtpController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { verifyOtpUseCase } } = Dependencies ;
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            
            const  { email , otp } = req.body

            const  verify = await verifyOtpUseCase( Dependencies ).execute( email , otp ) ;

            if(!verify){

              return res.status(200).json( { 

                    success: false,
                    data: {},
                    message: " Incorrect OTP ", 
                } )
            }

           

           return  res.status(200).json( { 

                    success: true,
                    data: {},
                    message: "otp verificatoin successfully", 

                } )

        } catch ( error : any ) {
           
            console.log('error from  login Controller', error )
            next(error)
        }
    }
}