import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const blockUnblockUseCase = ( Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : { blockUnblock } } = Dependencies

    return {

        execute: async ( _id : string , isBlocked : boolean ) => { 
            try {

                return await blockUnblock( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}