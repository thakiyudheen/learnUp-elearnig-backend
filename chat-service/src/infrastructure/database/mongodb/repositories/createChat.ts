import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";


export const createChat = async  ( data : ChatEntity ) : Promise < ChatEntity > => {
    try {
       
        const chat = await Chat.create( data ) ;

        if (!chat) {

            throw new Error("Chat creation error")

        }

        return chat

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}