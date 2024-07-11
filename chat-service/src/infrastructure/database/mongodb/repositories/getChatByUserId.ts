import { ChatEntity, MessageEntity } from "@/domain/entities";
import { Chat } from "../models";


export const getChatByUserId = async  ( data : {userId : string} ) : Promise < any > => {
    try {
       
        const chat = await Chat.find({
            participants: 
              data.userId 
            
          }).populate('participants');
          
         if (!chat) {

            throw new Error("fetch chat creation error")

        }
      

        return chat

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}