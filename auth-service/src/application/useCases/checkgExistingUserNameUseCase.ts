import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const checkExistingUserNameUseCase = (Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : {isExistingUserName} } = Dependencies

    return {

        execute: async (username : string ) => { 
            try {

                return await isExistingUserName( username )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}