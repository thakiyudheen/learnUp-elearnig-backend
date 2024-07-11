import { IDependecies } from "@/application/Interfases/IDependencies";




export const getMoreEnrolledCourseUseCase = (Dependencies : IDependecies ) => {
  
    const {  repositories : { getMoreEnrolledCourse } } = Dependencies

    return {

        execute: async ( ) => { 
            try {
                console.log('this is usecase')

                return await getMoreEnrolledCourse( )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}