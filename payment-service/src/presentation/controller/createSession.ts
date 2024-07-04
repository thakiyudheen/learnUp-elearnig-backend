import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";



export const createSessinController = ( Dependencies : IDependecies ) => {
   
    const { useCases : {createSessionUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            

            console.log('payment session data', req.body)
           
            if (!process.env.STRIPE_SECRET_KEY) {
                console.log("Stripe secret key is not found in env");
                return res.status(500).send("Internal server error: Stripe secret key is missing");
            }

            const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

            const { courseName, courseThumbnail, userId, courseId, amount } = req.body;

            const data = [
                {
                    price_data: {
                        currency: "INR",
                        product_data: {
                            name: courseName,
                            images: [courseThumbnail]
                        },
                        unit_amount: Math.floor(parseInt(amount) * 100)
                    },
                    quantity: 1
                }
            ];

            const session = await stripeInstance.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: data,
                mode: "payment",
                success_url: `${process.env.FRONTEND_URL}/payment-success`,
                cancel_url: `${process.env.FRONTEND_URL}/payment-failed`
            });

            const result = await createSessionUseCase( Dependencies ).execute( { userId , sessionId : session.id , courseId} )

           

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