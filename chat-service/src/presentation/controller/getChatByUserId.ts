import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getChatByUserIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getChatByUserIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------',req.body)
            const userId: string = req?.query?.userId as string;
  
            const data = {
              userId 
            };

            const  message = await getChatByUserIdUseCase( Dependencies ).execute( data )

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