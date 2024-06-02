import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getAllInstructorsController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getAllInstructorUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            

            const  instructors = await getAllInstructorUseCase( Dependencies ).execute( )

            if( !instructors ){
              return res.status(200).json( { 

                    success: false,
                    data: {},
                    message: " The instructors is Emty!! ", 
                } )
            }
           return  res.status(200).json( { 

                    success: true,
                    data: instructors ,
                    message: " instructor find successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from get all students controller', error )
            next(error)
        }
    }
}