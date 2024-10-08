import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";


interface data {
    _id : string ,
    isBlocked : boolean
}

export const blockUnblockUserUseCase = ( Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : { blockUnblock } } = Dependencies

    return {

        execute: async ( data : data  ) => { 
            try {

                return await blockUnblock( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}