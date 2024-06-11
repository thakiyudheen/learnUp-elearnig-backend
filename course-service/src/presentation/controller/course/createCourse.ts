import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createCourseUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('course data', req.body)
           

            const category = await createCourseUseCase( Dependencies ).execute( req.body )
            
            if(category){

                return  res.status(200).json( { 

                    success: true,
                    data: category,
                    message: "Course created Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while creating course", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}