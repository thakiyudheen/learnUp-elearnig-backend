import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface EnrollmentQueryParams {
    userId: string;
    courseId:string ;
}
    

export const getProgressByIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : {getProgressByIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            
            
            const data: EnrollmentQueryParams = {
                userId: req.query.userId as string,
                courseId : req.query.courseId as string
              };

              

            const enrollment = await getProgressByIdUseCase( Dependencies ).execute( data )
            
            if(!enrollment){

                throw new Error('Error while fetching Enrollment')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "Enrollment fetched Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}