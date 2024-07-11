import { IDependecies } from "@/application/Interfases/IDependencies";


interface EnrollmentQueryParams {
    userId: string;
    courseId:string;
    progress :any
}



export const updateProgressByIdUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { updateProgressById } } = Dependencies

    return {

        execute: async ( data : EnrollmentQueryParams  ) => { 
            try {
                console.log('this is usecase')

                return await updateProgressById( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}