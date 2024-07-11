import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import updateChatProducer from "../../infrastructure/kafka/producer/updateChatProducer";
import coursePurcahseSuccessProducer from "../../infrastructure/kafka/producer/coursePurcahseSuccessProducer";



export const createSubScriptionPaymentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createSubscriptionPaymentUseCase} } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { instructorId } = req.body;

            console.log('payment  data', req.body)
           
          
            const result = await createSubscriptionPaymentUseCase( Dependencies ).execute( req.body )



            const data = {
                userId : result.userId ,
                subscriptionType : result.subscriptionType ,
                amount : result.amount ,
                instructorId: req.body.instructorId,
                chatId:req.body.chatId
            }

            await updateChatProducer(data)
            await coursePurcahseSuccessProducer(data)


       

           

            return  res.status(200).json( { 

                success: true,
                data: result,
                message: "payment session created successfully !"

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}