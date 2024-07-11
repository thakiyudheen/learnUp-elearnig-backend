import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "jwt-middleware-learnup";
import { roleMiddleware } from "role-middleware";






export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { getAllInstructors , getAllstudents, blockUnblocks , verifyRequest , getRequests , rejectRequest,updateUser} = controller( Dependencies ) ;

    const router = Router()

    // get all students --------------------------
    router.route('/getAll-students').get( jwtMiddleware , getAllstudents )
    
    // get all instructor --------------------------
    router.route('/getAll-instructors').get( jwtMiddleware ,  getAllInstructors )
    
    // block users --------------------------
    router.route('/block-unblock').patch( jwtMiddleware , blockUnblocks )
    
    // handle verify request --------------------------
    router.route('/verify-request').patch( jwtMiddleware ,roleMiddleware('admin'), verifyRequest )

     // get all requests  --------------------------
     router.route('/getAll-requests').get( jwtMiddleware ,roleMiddleware('admin'),getRequests )
     
     // reject requests  --------------------------
     router.route('/reject-request').patch( jwtMiddleware ,roleMiddleware('admin'), rejectRequest )
     
     // update user  --------------------------
     router.route('/update-user').put( jwtMiddleware , updateUser )

    return router
}