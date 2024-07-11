import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../../Interfases/IDependencies";



export const findCategoryUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { findCategory } } = Dependencies

    return {

        execute: async (categoryName : string ) => { 
            try {

                return await findCategory( categoryName )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}