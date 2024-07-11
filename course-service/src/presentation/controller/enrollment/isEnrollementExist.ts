import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface QueryParams {
    courseId: string;
    userId:string;

  }

export const isEnrollmentExistController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { isEnrollmentExistUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            
           
            const data: QueryParams = {
                courseId: req.query.instructorId as string,
                userId:req.query.userId as string,
              };
           

            const enrollment = await isEnrollmentExistUseCase( Dependencies ).execute( data )
            
            if(!enrollment){

                return  res.status(200).json( { 

                    success: false,
                    data: {},
                    message: "enrollment is not exist", 
    
                } )
               
            }

            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "enrollment is exist", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}