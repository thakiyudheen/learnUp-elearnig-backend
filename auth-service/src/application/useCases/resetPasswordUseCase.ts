import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const resetPasswordUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { resetPassword } } = Dependencies

    return {

        execute: async ( email : string , password : string ) => { 
            try {

                return await resetPassword( email , password )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}