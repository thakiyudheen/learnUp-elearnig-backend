import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const updateEnrollmentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { updateEnrollmenteUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
        
            console.log('this is ', req.body)
            const assessment = await updateEnrollmenteUseCase( Dependencies ).execute( req.body )
            
           

                return  res.status(200).json( { 

                    success: true,
                    data: assessment,
                    message: "Enrollment updated Successfully", 
    
                } )

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}