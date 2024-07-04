import { IDependecies } from "@/application/Interfases/IDependencies";


export const updateEnrollmenteUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { updateEnrollment } } = Dependencies

    return {

        execute: async (data : any ) => { 
            try {

                return await updateEnrollment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}