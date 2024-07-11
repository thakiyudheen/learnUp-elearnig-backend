import { IDependecies } from "@/application/Interfases/IDependencies";

interface Params {
    userId?: string;
    instructorId?: string;
    page?: number;
    limit?: number;
  }

export const getMyStudentUseCase = (Dependencies : IDependecies ) => {
  
    const {  repositories : { getMyStudents } } = Dependencies

    return {

        execute: async ( data:Params ) => { 
            try {
                console.log('this is usecase')

                return await getMyStudents( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}