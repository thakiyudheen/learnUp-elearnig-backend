import blockUnblockProducer from "../../infrastructure/kafka/producer/blockUnblockProducer";
import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import verificationRequestProucer from "../../infrastructure/kafka/producer/verificationRequestProucer";

interface data {
    _id :string ,
    isBlocked :boolean
}
export const verifyRequestContoller = ( Dependencies : IDependecies ) => {
   
    const { useCases : { verificationRequestUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { email , isVerified } = req.body ;

            console.log(req.body)

            await verificationRequestUseCase( Dependencies ).execute( req.body )

            
        //    create kafka ------------------------ 
           await verificationRequestProucer(req.body)

           return  res.status(200).json( { 

                    success: true,
                    data: {} ,
                    message: " request accepted successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from get all request verify controller', error )
            next(error)
        }
    }
}