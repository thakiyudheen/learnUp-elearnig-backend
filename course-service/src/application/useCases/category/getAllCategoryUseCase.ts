import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const getAllCategoryUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getAllCategories } } = Dependencies

    return {

        execute: async (data:{ page?:number , limit ?:number}) => { 
            try {

                return await getAllCategories( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}