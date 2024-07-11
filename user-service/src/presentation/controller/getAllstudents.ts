import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getAllStudentsController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getAllStudentUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------',req.query)
            
        //     if(!req.user){
        //         throw new Error("no jwt is not working")
        //    }
            const  students = await getAllStudentUseCase( Dependencies ).execute( req.query )

            if( !students ){
              return res.status(200).json( { 

                    success: false,
                    data: {},
                    message: " The students is Emty!! ", 
                } )
            }
           return  res.status(200).json( { 

                    success: true,
                    data: students ,
                    message: " students find successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from get all students controller', error )
            next(error)
        }
    }
}