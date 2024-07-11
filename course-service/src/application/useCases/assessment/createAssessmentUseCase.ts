import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const createAssessmentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createAssessment } } = Dependencies

    return {

        execute: async (data : any ) => { 
            try {

                return await createAssessment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}