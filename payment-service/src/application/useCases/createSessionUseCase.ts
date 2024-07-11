import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { SessionEntity } from "../../domain/entities";
import { NextFunction, Request, Response } from "express";




export const createSessionUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createSession } } = Dependencies

    return {

        execute: async ( data : SessionEntity ) => { 
            try {

                return await createSession( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}