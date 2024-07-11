import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const deleteAssessmentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { deleteAssessment } } = Dependencies

    return {

        execute: async (data : any ) => { 
            try {

                return await deleteAssessment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}