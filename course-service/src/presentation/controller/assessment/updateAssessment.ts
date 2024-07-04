import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const updateAssessmentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { updateAssessmentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
        
            console.log('this is ', req.body)
            const assessment = await updateAssessmentUseCase( Dependencies ).execute( req.body )
            
           

                return  res.status(200).json( { 

                    success: true,
                    data: assessment,
                    message: "assessment updated Successfully", 
    
                } )

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}