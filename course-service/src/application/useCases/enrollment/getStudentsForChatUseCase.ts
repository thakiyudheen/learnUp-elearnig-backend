import { IDependecies } from "@/application/Interfases/IDependencies";




export const getStudentsForChatUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getStudentsForChat } } = Dependencies

    return {

        execute: async ( data : { instructorId : string  }  ) => { 
            try {
                

                return await getStudentsForChat( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}