import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const findUserByEmail = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { findUserByEmail } } = Dependencies

    return {

        execute: async ( email : string ) => { 
            try {

                return await findUserByEmail( email )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}