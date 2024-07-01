import database from "@/_boot/database";
import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const getAllCourseUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getAllCourse } } = Dependencies

    return {

        execute: async ( data: { instructorRef ?: string , isPublished? : boolean, page?:number,limit?:number,isBlocked?:boolean  } ) => { 
            try {

                return await getAllCourse( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}