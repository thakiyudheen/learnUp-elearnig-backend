import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const blockUnblockUserUseCase = ( Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : { getAllInstructors } } = Dependencies

    return {

        execute: async ( ) => { 
            try {

                return await getAllInstructors( )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}