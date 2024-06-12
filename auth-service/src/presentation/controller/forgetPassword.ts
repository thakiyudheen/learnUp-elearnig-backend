import { generateForgetPassword } from "../../_lib/http/jwt";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { forgetPasswordMailProducer } from "../../infrastructure/kafka/producer";
import { NextFunction, Request, Response } from "express";


export const forgetPasswordController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { findUserByEmail } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { email } = req.params

            const  user = await findUserByEmail( Dependencies ).execute( email )

            if ( user?.isBlocked || user?.isGauth  ) {

                return res.status(200).json({

                    success: false,
                    data: user,
                    isBlocked:user?.isBlocked?true:false,
                    message: user?.isGauth?"User is blocked ..!":"Google authenticated candidate ..!"

                });

            }

            // generate jwt token------------------------
            const token = await generateForgetPassword({email})

            //produce the forget pasword mail------------
            await forgetPasswordMailProducer({ email , token })


           return  res.status(200).json( { 

                    success: true,
                    data: user ,
                    message: " Mail sended successfully ! ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from forget password  controller', error )
            next(error)
        }
    }
}