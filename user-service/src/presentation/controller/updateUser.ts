import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import updateUserProducer from "../../infrastructure/kafka/producer/updateUserProducer";



export const updateUserContoller = ( Dependencies : IDependecies ) => {
   
    const { useCases : { updateUserUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { email , isVerified } = req.body ;

            console.log(req.body)

            const user = await updateUserUseCase( Dependencies ).execute( req.body )

            if(!user){
                throw new Error("Error while updating User Profile")
            }
            //    create kafka ------------------------ 
            await updateUserProducer( req.body )
            
            return  res.status(200).json( { 

                    success: true,
                    data: user ,
                    message: " request accepted successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from update user controller', error )
            next(error)
        }
    }
}