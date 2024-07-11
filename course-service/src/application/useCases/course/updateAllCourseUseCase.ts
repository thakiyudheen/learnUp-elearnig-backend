import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";



export const updateAllCourseUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { updateAllCourse } } = Dependencies

    return {

        execute: async ( data : any ) => { 
            try {

                return await updateAllCourse( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}