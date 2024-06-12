import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const findCourseByIdUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { findCourseById } } = Dependencies

    return {

        execute: async ( _id : string ) => { 
            try {

                return await findCourseById( _id )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}