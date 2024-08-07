import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getAllCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getAllCourseUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const course = await getAllCourseUseCase( Dependencies ).execute( req.query )
            
            if(course){

                return  res.status(200).json( { 

                    success: true,
                    data: course,
                    message: "Course fetched Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while course fetching", 

            } )
          

            

        } catch ( error : any ) {
            
            console.log('error from get all  course controller ',error)
            next(error)
        }
    }
}