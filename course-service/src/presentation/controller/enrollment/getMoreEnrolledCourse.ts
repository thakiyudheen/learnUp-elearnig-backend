import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

 

export const getMoreEnrolledCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getMoreEnrolledCourseUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
      
            const enrollment = await getMoreEnrolledCourseUseCase( Dependencies ).execute( )
            
            if(!enrollment){

                throw new Error('Error while most enrolled course ')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "Most Enrollment fetched Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}