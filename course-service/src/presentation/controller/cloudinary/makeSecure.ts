import { generateSignedUrl } from "@/_boot/cloudinary";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const createCourseController = ( Dependencies : IDependecies ) => {
   
    const { useCases : {  } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('publicId data', req.body)
           

            const url = await generateSignedUrl(req.body)
            
            
            return  res.status(200).json( { 

                success: false,
                data: {url:url},
                message: "secure url of the source", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}