import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const getUserDataUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { getUserData } } = Dependencies

    return {

        execute: async ( userId : string ) => { 
            try {

                return await getUserData( userId )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}