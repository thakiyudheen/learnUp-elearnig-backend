import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const findByUserEmailController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { findUserByEmail } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { email } = req.params

            const  user = await findUserByEmail( Dependencies ).execute( email )

            if(!user){
              return res.status(200).json( { 

                    success: true,
                    data: {},
                    message: " Email is unique ", 
                } )
            }
           return  res.status(200).json( { 

                    success: false,
                    data: user,
                    message: "Email is exist ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from findUserByEmail controller', error )
            next(error)
        }
    }
}