import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common/middleWares/jwtMimiddleWare";




export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { getAllInstructors , getAllstudents, blockUnblocks , verifyRequest , getRequests , rejectRequest} = controller( Dependencies ) ;

    const router = Router()

    // get all students --------------------------
    router.route('/getAll-students').get( getAllstudents )
    
    // get all instructor --------------------------
    router.route('/getAll-instructors').get(  getAllInstructors )
    
    // block users --------------------------
    router.route('/block-unblock').patch(  blockUnblocks )
    
    // handle verify request --------------------------
    router.route('/verify-request').patch(  verifyRequest )

     // get all requests  --------------------------
     router.route('/getAll-requests').get( getRequests )
     
     // reject requests  --------------------------
     router.route('/reject-request').patch( rejectRequest )
     

    return router
}