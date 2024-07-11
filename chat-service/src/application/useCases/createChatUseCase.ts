import { ChatEntity } from "@/domain/entities";
import { IDependecies } from "../Interfases/IDependencies";



export const createChatUseCase = (Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : {createChat} } = Dependencies

    return {

        execute: async (data : ChatEntity) => { 
            try {

                return await createChat( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}