import { IDependecies } from "@/application/Interfases/IDependencies";


interface EnrollmentQueryParams {
    userId: string;
    courseId:string;
}



export const getProgressByIdUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getProgressById } } = Dependencies

    return {

        execute: async ( data : EnrollmentQueryParams  ) => { 
            try {
                console.log('this is usecase')

                return await getProgressById( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}