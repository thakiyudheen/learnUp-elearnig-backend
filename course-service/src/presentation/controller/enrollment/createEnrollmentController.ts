import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createEnrollmentController= ( Dependencies : IDependecies ) => {
   
    const { useCases : { createEnrollmentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
           
            console.log('this is the data where passed',req.body)
            
            const enrollment = await createEnrollmentUseCase( Dependencies ).execute( req.body )
            
            if(!enrollment){
                
                throw new Error('Error while fetching Enrollment')
               
            }
            console.log('this is before error fetching')
            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "Enrollment created Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}