import { ChatEntity } from "@/domain/entities";
import { IDependecies } from "../Interfases/IDependencies";



export const getChatByUserIdUseCase = (Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : {getChatByUserId} } = Dependencies

    return {

        execute: async (data : { userId:string }) => { 
            try {

                return await getChatByUserId( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}