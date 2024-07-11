import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const createEnrollmentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createEnrollment } } = Dependencies

    return {

        execute: async ( data : any ) => { 
            try {

                return await createEnrollment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}