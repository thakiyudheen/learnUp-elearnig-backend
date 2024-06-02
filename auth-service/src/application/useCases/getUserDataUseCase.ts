import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const getUserDataUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { getUserData } } = Dependencies

    return {

        execute: async ( _id : string ) => { 
            try {

                return await getUserData( _id )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}