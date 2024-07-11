import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface QueryParams {
    instructorId: string;

  }

export const getStudentForChatController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getStudentsForChatUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            
           
            const data: QueryParams = {
                instructorId: req.query.instructorId as string,
              };
           

            const enrollment = await getStudentsForChatUseCase( Dependencies ).execute( data )
            
            if(!enrollment){

                throw new Error('Error while fetching students for chat')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "students for chat fetched Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}