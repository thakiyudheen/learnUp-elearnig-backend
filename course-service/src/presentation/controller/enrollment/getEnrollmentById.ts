import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getEnrollmentByIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getEnrollmentByIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            const { _id } = req.params ;
           

            const enrollment = await getEnrollmentByIdUseCase( Dependencies ).execute( _id )
            
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