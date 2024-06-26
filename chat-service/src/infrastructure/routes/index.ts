import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { Dependencies } from "../../_boot/dependecies";
import { controller } from "../../presentation/controller";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const {createChat,createMessage,getChatByUserId} = controller( Dependencies ) ;

    const router = Router()

    // create chat --------------------------
    router.route( '/create-chat' ).post( createChat )
    
    // create meassage-----------------------
    router.route( '/create-chat' ).post( createMessage )
    
    // get chat by user id ------------------
    router.route( '/get-chatById' ).get( getChatByUserId )



    return router
}