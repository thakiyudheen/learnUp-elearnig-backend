import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createChatController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createChatUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------',req.body)
            

            const  chat = await createChatUseCase( Dependencies ).execute( req.body )

           return  res.status(200).json( { 

                    success: true,
                    data: chat,
                    message: "chat crated successfullly  ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from create chat controller', error )
            next(error)
        }
    }
}