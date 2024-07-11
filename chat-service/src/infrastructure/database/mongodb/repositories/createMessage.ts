import { ChatEntity, MessageEntity } from "@/domain/entities";
import { Message } from "../models";


export const createMessage = async  ( data : MessageEntity ) : Promise < MessageEntity > => {
    try {
       
        const chat = await Message.create( data ) ;

        if (!chat) {

            throw new Error("Message creation error")

        }

        return chat

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}