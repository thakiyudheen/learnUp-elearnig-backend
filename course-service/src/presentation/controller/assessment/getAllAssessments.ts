import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getAllAssessmentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getAllAssessmentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
        

            const assessment = await getAllAssessmentUseCase( Dependencies ).execute( req.query )
            
            if(assessment){

                return  res.status(200).json( { 

                    success: true,
                    data: assessment,
                    message: "assessment fetch Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while fetching assessment", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}