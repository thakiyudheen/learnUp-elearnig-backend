import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const getAllStudentUseCase = (Dependencies : IDependecies) => {

    console.log('this is working ')
    
    const {  repositories : { getAllStudents} } = Dependencies

    return {

        execute: async ( data: { page?:number,limit?:number} ) => { 
            try {

                return await getAllStudents( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}