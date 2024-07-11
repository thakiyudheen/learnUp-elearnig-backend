import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createAssessmentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createAssessmentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const  { categoryName } = req.body ;

            console.log('creating data', req.body)
           

            const assessment = await createAssessmentUseCase( Dependencies ).execute( req.body )
            
            if(assessment){

                return  res.status(200).json( { 

                    success: true,
                    data: assessment,
                    message: "assessment created Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while creating assessment", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}