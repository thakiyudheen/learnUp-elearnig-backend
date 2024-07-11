import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "jwt-middleware-learnup";
import { roleMiddleware } from "role-middleware";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { createSession , createPayment , getAllPayment ,createSubscriptionPayment} = controller( Dependencies ) ;

    const router = Router()
    
    // create session -----------------------
     router.route('/create-session').post(jwtMiddleware, createSession )
    
    //  create payment ----------------------
    router.route('/create-payment').post( jwtMiddleware, createPayment )
    
    //  create Subscrition payment ----------------------
    router.route('/create-subscriptionPayment').post(jwtMiddleware, createSubscriptionPayment  )
    
    //  get all payment ----------------------
    router.route('/getAll-payment').get( jwtMiddleware, getAllPayment )


    return router
}