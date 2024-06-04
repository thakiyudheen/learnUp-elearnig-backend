import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common/middleWares/jwtMimiddleWare";




export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { getAllInstructors , getAllstudents, blockUnblock } = controller( Dependencies ) ;

    const router = Router()

    // get all students --------------------------
    router.route('/getAll-students').get( getAllstudents )
    
    // get all students --------------------------
    router.route('/getAll-instructors').get(  getAllInstructors )
    
    // get all students --------------------------
    router.route('/block-unblock').patch(  blockUnblock )


    return router
}