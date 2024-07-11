import {MessageEntity } from "@/domain/entities";
import { IDependecies } from "../Interfases/IDependencies";



export const createMessageUseCase = (Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : {createMessage} } = Dependencies

    return {

        execute: async (data : MessageEntity ) => { 
            try {

                return await createMessage( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}