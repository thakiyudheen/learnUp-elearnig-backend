import { IDependecies } from "../../application/Interfases/IDependencies";
import { sendVerificationMail } from "../../infrastructure/services/mail";
import { Request, Response, NextFunction } from "express";


export const sendVerificationMailController = ( Dependencies : IDependecies ) => {
    console.log('here reahed')
    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { email } = req.params ;
            
            if(!email){
                throw new Error("Email is required!");
            }

            await sendVerificationMail( email ) 
            

            res.status(200).json({

                success: true,
                data: {},
                message: "Email send!"

            });

        } catch (error) {
            next(error);
        }
    }
}