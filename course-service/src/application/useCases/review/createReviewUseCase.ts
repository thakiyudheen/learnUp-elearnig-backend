import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { CategoryEntity, CourseEntity, ReviewEntity } from "@/domain/entities";
import { NextFunction, Request, Response } from "express";




export const createReviewUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createReview } } = Dependencies

    return {

        execute: async ( data : ReviewEntity ) => { 
            try {

                return await createReview( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}