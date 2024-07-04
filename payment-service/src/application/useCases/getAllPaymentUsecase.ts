import { IDependecies } from "../../application/Interfases/IDependencies";



export const getAllPaymentUsecase = (Dependencies : IDependecies ) => {
 
    const {  repositories : { getAllPayment } } = Dependencies
   
    return {
       

        execute: async ( data :{ userId ?: string } ) => { 
            try {

                return await getAllPayment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}