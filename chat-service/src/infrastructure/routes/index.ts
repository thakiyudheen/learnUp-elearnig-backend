import { Router } from "express";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { controller } from "../../presentation/controller";



export const routes = ( Dependencies : IDependecies ) => {
    const {} = Dependencies 
    const {createChat,createMessage,getChatByUserId,getMessageByChatId} = controller( Dependencies ) ;

    const router = Router()

    // create chat --------------------------
    router.route( '/create-chat' ).post( createChat )
    
    // create meassage-----------------------
    router.route( '/create-message' ).post( createMessage )
    
    // get chat by user id ------------------
    router.route( '/get-chatById' ).get( getChatByUserId )
    
    // get message by chat id ------------------
    router.route( '/get-messageByChatId' ).get( getMessageByChatId )


    return router
}