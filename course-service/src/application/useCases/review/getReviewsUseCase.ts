import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity, ReviewEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const getReviewsUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getReviews } } = Dependencies

    return {

        execute: async ( data : {page?:number,limit:number,courseId:string} ) => { 
            try {

                return await getReviews( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}