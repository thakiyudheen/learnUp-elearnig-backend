import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../../Interfases/IDependencies";



export const editCategoryUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { editCategory } } = Dependencies

    return {

        execute: async (data : {_id : string , categoryName : string , isBlocked : boolean }) => { 
            try {

                return await editCategory( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}