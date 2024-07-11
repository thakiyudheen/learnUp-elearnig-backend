
import { IDependecies } from "../Interfases/IDependencies";



export const getRequestUseCase = (Dependencies : IDependecies) => {

   
    
    const {  repositories : { getRequest } } = Dependencies

    return {

        execute: async (  data: { page?:number,limit?:number}) => { 
            try {

                return await getRequest( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}