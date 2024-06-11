import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const updateCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { updateCourseUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('course data', req.body)
           

            const course = await updateCourseUseCase( Dependencies ).execute( req.body )
            
            if(course){

                return  res.status(200).json( { 

                    success: true,
                    data: course,
                    message: "Course updated Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while course updating", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}