import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const updateAssessmentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { updateAssessment } } = Dependencies

    return {

        execute: async (data : any ) => { 
            try {

                return await updateAssessment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}