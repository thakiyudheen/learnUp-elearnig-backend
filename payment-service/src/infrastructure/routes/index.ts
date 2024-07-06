import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
// import {jw}




export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { createSession , createPayment , getAllPayment ,createSubscriptionPayment} = controller( Dependencies ) ;

    const router = Router()
    
    // create session -----------------------
     router.route('/create-session').post( createSession )
    
    //  create payment ----------------------
    router.route('/create-payment').post( createPayment )
    
    //  create Subscrition payment ----------------------
    router.route('/create-subscriptionPayment').post( createSubscriptionPayment  )
    
    //  get all payment ----------------------
    router.route('/getAll-payment').get( getAllPayment )


    return router
}