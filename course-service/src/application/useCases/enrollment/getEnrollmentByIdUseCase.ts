import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const getEnrollmentByIdUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getEnrollmentById } } = Dependencies

    return {

        execute: async ( _id : string ) => { 
            try {

                return await getEnrollmentById( _id )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}