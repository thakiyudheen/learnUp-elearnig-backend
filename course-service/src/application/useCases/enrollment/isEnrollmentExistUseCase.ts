import { IDependecies } from "@/application/Interfases/IDependencies";





export const isEnrollmentExistUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { isEnrollmentExist } } = Dependencies

    return {

        execute: async ( data : any  ) => { 
            try {

                return await isEnrollmentExist( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}