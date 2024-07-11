import { IDependecies } from "../Interfases/IDependencies";



export const getMessageByChatIdUseCase = (Dependencies : IDependecies) => {

    
    const {  repositories : {getMessageByChatId} } = Dependencies

    return {

        execute: async (data : { chat :string }) => { 
            try {

                return await getMessageByChatId( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}