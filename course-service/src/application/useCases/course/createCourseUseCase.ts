import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const createCourseUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createCourse } } = Dependencies

    return {

        execute: async ( data : CourseEntity ) => { 
            try {

                return await createCourse( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}