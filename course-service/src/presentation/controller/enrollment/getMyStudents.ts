import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface QueryParams {
    instructorId: string;

  }

export const getMyStudentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getMyStudentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const myStudent = await getMyStudentUseCase( Dependencies ).execute( req.query )
            
            if(!myStudent){

                throw new Error('Error while fetching my student ')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: myStudent,
                message: "My student fetched Successfully", 

            } )   

        } catch ( error : any ) {
           
            next(error)
        }
    }
}