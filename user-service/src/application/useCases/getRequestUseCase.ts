import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const getRequestUseCase = (Dependencies : IDependecies) => {

   
    
    const {  repositories : { getRequest } } = Dependencies

    return {

        execute: async ( ) => { 
            try {

                return await getRequest( )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}