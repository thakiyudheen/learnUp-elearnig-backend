import {  MessageEntity } from "@/domain/entities";
import { Message } from "../models";


export const getMessageByChatId = async  ( data : {chat : string} ) : Promise < MessageEntity[] > => {
    try {
       
        const messages = await Message.find({chat:data.chat}).populate('chat').populate('sender');
          
         if (!messages) {

            throw new Error("fetch message by chat id  error")

        }
      

        return messages

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}