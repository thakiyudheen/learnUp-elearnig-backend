import coursePurcahseSuccessProducer from "../../infrastructure/kafka/producer/coursePurcahseSuccessProducer";
import { IDependecies } from "../../application/Interfases/IDependencies";
import createEnrollmentProducer from "../../infrastructure/kafka/producer/createEnrollmentProducer";
import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";



export const createPaymentController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createPaymentUsecase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { instructorId } = req.body;

            console.log('payment  data', req.body)
           
          
            const result = await createPaymentUsecase( Dependencies ).execute( req.body )

            const data = {
                userId : result.userId ,
                instructorId ,
                courseId : result.courseId,
                amount : result.amount ,
            }

            await createEnrollmentProducer( data )
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