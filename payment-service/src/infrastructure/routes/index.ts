import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";




export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { createSession , createPayment} = controller( Dependencies ) ;

    const router = Router()

    router.route('/create-session').post( createSession )
    
    router.route('/create-payment').post( createPayment )



    return router
}