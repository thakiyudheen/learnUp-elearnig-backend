import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";
import { jwtMiddleware } from "../../_lib/common/middleWares/jwtMimiddleWare";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const { sendMail } = controller( Dependencies ) ;

    const router = Router()

    // send Email --------------------------
    router.route('/email-verification/:email').get(  sendMail )


    return router
}