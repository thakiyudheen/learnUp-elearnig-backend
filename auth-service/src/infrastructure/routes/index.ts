import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";





export const routes = ( Dependencies : IDependecies ) => {
    
    const { checkExistingUserName , findUserByEmail , login , signup , verifyOtp , googleAuth} = controller( Dependencies ) ;

    const router = Router()

    

    // check username exist or not ----------------
    router.route( '/exist_username/:username' ).get( checkExistingUserName )

    // find user By Email--------------------------
    router.route( '/exist_email/:email' ).get( findUserByEmail )

    // user login ---------------------------------
    router.route( '/login' ).post( login )

    // signup user --------------------------------
    router.route( '/signup' ).post( signup )

    // verify otp --------------------------------
    router.route( '/verify-otp' ).post( verifyOtp )
    
    // google authentication --------------------------------
    router.route( '/google-auth' ).post( googleAuth )





  


    return router
}