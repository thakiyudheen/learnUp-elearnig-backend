import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";

interface data{
    _id : string,
    isBlocked ?: boolean,
    isPublished ?: boolean,
    isReject ?: boolean,
}



export const updateCourseUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { updateCourse } } = Dependencies

    return {

        execute: async ( data : data ) => { 
            try {

                return await updateCourse( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}