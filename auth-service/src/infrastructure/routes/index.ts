import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
// import { jwtMiddleware } from "../../_lib/common/middleware/jwtMiddleWare";
import { jwtMiddleware } from "jwt-middleware-learnup";





export const routes = ( Dependencies : IDependecies ) => {
    
    const { checkExistingUserName , findUserByEmail ,
         login , signup , verifyOtp , googleAuth , getUser , logout ,forgetPassword, resetPassword } = controller( Dependencies ) ;

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
    
    // get user --------------------------------
    router.route( '/get-user' ).get( jwtMiddleware , getUser )
    
    // logout  --------------------------------
    router.route( '/logout' ).get( jwtMiddleware , logout )
    
    // forget password   --------------------------------
    router.route( '/forget-password/:email' ).get( forgetPassword )
    
    // reset  password   --------------------------------
    router.route( '/reset-password' ).patch( resetPassword )
    




  


    return router
}