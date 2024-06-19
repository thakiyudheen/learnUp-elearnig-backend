import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const updateAllCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { updateAllCourseUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('course data', req.body)
           

            const course = await updateAllCourseUseCase( Dependencies ).execute( req.body )
            
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