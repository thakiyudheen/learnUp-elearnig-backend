import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const getAllInstructorUseCase = ( Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : { getAllInstructors } } = Dependencies

    return {

        execute: async (  data: { page?:number,limit?:number}) => { 
            try {

                return await getAllInstructors( data)  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}