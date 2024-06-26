import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createMessageController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createMessageUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------',req.body)
            

            const  message = await createMessageUseCase( Dependencies ).execute( req.body )

           return  res.status(200).json( { 

                    success: true,
                    data: message,
                    message: "message crated successfullly  ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from create message controller', error )
            next(error)
        }
    }
}