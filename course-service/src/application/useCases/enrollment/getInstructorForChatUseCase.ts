import { IDependecies } from "@/application/Interfases/IDependencies";




export const getInstructorsForChatUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getInstructorsForChat } } = Dependencies

    return {

        execute: async ( data : {userId?:string, instructorId?:string}  ) => { 
            try {
                console.log('this is instp',data)

                return await getInstructorsForChat( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}