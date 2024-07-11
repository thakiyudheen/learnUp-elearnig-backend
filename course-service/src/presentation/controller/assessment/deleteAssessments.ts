import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const deleteAssessmentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { deleteAssessmentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
        
            console.log('this is ', req.query)
            const assessment = await deleteAssessmentUseCase( Dependencies ).execute( req.query )
            
           

                return  res.status(200).json( { 

                    success: true,
                    data: {},
                    message: "assessment deleted Successfully", 
    
                } )

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}