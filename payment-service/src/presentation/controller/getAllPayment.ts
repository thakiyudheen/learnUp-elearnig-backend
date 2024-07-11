
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const getAllPaymentController = ( Dependencies : IDependecies ) => {
 
    const { useCases : { getAllPaymentUsecase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
           
            console.log('payment  data', req.query)
           
          
            const result = await getAllPaymentUsecase( Dependencies ).execute( req.query )
           

            return  res.status(200).json( { 

                success: true,
                data: result,
                message: "payment fetched successfully !"

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}