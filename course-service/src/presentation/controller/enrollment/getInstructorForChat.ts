import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface QueryParams {
    instructorId: string;

  }

export const getInstructorForChatController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getInstructorsForChatUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            const course = await getInstructorsForChatUseCase( Dependencies ).execute( req.query )
            
            if(!course){

                throw new Error('Error while fetching instructor for chat')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: course,
                message: "Instructor for chat fetched Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}