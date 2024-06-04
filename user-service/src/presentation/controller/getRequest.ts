import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getRequestController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getRequestUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            

            const  requests = await getRequestUseCase( Dependencies ).execute( )

            if( !requests ){
              return res.status(200).json( { 

                    success: false,
                    data: {},
                    message: " The requests is Emty!! ", 
                } )
            }
           return  res.status(200).json( { 

                    success: true,
                    data: requests ,
                    message: " Requests find successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from get all students controller', error )
            next(error)
        }
    }
}