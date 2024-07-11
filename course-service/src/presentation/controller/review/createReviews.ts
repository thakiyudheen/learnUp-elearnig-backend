import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createReviewController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createReviewUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('create review data', req.body)
           

            const review = await createReviewUseCase( Dependencies ).execute( req.body )
            
            if(review){

                return  res.status(200).json( { 

                    success: true,
                    data: review,
                    message: "Review created Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while creating review", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}