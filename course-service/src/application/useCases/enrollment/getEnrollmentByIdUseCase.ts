import { IDependecies } from "@/application/Interfases/IDependencies";


interface EnrollmentQueryParams {
    userId?: string;
    page: number;
    limit: number;
    search?: string;
    categories?: string[];
    levels?: string[];
    sort?: 'asc' | 'desc';
  }



export const getEnrollmentByIdUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getEnrollmentById } } = Dependencies

    return {

        execute: async ( data : EnrollmentQueryParams  ) => { 
            try {
                console.log('this is usecase')

                return await getEnrollmentById( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}