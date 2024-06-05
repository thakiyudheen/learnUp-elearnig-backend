import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";


interface data {
    email : string ,
    isVerified : boolean
}

export const rejectRequestUseCase = ( Dependencies : IDependecies) => {

    
    
    const {  repositories : { rejectRequest } } = Dependencies

    return {

        execute: async ( data : data  ) => { 
            try {

                return await rejectRequest( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}