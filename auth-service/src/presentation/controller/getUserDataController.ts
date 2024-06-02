import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getUserDataController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getUserDataUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            
            if (!req.user) {

				throw new Error("Authentication required: No user provided.");

			}

            const { _id } = req.user ;

            const  user = await getUserDataUseCase( Dependencies ).execute( _id.toString() )

            if(!user){
              return res.status(200).json( { 

                    success: true,
                    data: {},
                    message: " Getting user successfully ", 
                } )
            }
           return  res.status(200).json( { 

                    success: false,
                    data: user,
                    message: " filed when getting user Data ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from getUser controller', error )
            next(error)
        }
    }
}