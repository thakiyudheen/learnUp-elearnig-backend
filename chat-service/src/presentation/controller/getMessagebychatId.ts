import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getMessageByChatIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getMessageByChatIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------',req.query)
            const chat: string = req?.query?.chat as string;
  
            const data = {
              chat
            };

            const  message = await getMessageByChatIdUseCase( Dependencies ).execute( data )
            // console.log('message',message)

           return  res.status(200).json( { 

                    success: true,
                    data: message,
                    message: "get message by chat id successfullly  ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from create message controller', error )
            next(error)
        }
    }
}