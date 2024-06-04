import blockUnblockProducer from "../../infrastructure/kafka/producer/blockUnblockProducer";
import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface data {
    _id :string ,
    isBlocked :boolean
}
export const blockUnblockController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { blockUnblockUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const {_id , isBlocked } = req.body ;

            console.log(req.body)

            await blockUnblockUseCase( Dependencies ).execute( req.body )

            
        //    create kafka ------------------------ 
           await blockUnblockProducer(req.body)


           return  res.status(200).json( { 

                    success: true,
                    data: {} ,
                    message: " updated successfully ", 

                } )

        } catch ( error : any ) {
           
            console.log('error from get all students controller', error )
            next(error)
        }
    }
}