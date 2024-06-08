import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const createCategoryUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createCategory } } = Dependencies

    return {

        execute: async (categoryName : string ) => { 
            try {

                return await createCategory( categoryName )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}