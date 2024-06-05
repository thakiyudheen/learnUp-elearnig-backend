import { hashPassword } from "../../_lib/http/bcrypt";
import { generateForgetPassword, verifyToken } from "../../_lib/http/jwt";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const resetPasswordController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { resetPasswordUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            req.body.password = hashPassword( req.body.password )

            const secret = process.env.FORGOT_PASSWORD_SECRET

            const  { token , password } = req.body ;

            const payload : any = verifyToken( token , secret as string )

            const { email } = payload ;

            const  reset  = await resetPasswordUseCase( Dependencies ).execute( email , password )

          
            if( !reset ) {
                
                return  res.status(200).json( { 

                    success: false,
                    data: {} ,
                    message: " error while changing password ", 

                } )
            }
            
            return  res.status(200).json( { 

                success: true,
                data: {} ,
                message: " password changed successfully ", 

            } )

        } catch ( error : any ) {
           
            console.log('error from forget password  controller', error )
            next(error)
        }
    }
}