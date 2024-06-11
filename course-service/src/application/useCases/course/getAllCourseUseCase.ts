import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const getAllCourseUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getAllCourse } } = Dependencies

    return {

        execute: async ( ) => { 
            try {

                return await getAllCourse( )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}