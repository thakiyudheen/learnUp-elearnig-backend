import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface EnrollmentQueryParams {
    userId: string;
    courseId:string ;
    progress :any ;
}
    

export const updateProgressByIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : {updateProgressByIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            
            console.log('thsi is  use  id',req.body )
          

             await updateProgressByIdUseCase( Dependencies ).execute( req.body )
            
            
            return  res.status(200).json( { 

                success: true,
                data: {},
                message: "progress updated Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}