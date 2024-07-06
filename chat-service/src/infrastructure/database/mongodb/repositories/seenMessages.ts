import { Message } from "../models";


export const seenMessages = async  ( data : {chat ?: string,sender?:string,_id?:string} ) : Promise < void > => {
    try {
       
        const messages = await Message.updateMany(data,{$set:{recieverSeen:true}})
 

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}