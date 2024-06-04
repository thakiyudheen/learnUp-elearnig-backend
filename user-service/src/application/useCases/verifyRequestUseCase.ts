import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";


interface data {
    email : string ,
    isVerified : boolean
}

export const verificationRequestUseCase = ( Dependencies : IDependecies) => {

    
    
    const {  repositories : { verifyRequest } } = Dependencies

    return {

        execute: async ( data : data  ) => { 
            try {

                return await verifyRequest( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}