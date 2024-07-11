import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const getAllAssessmentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { getAllAssessments } } = Dependencies

    return {

        execute: async (data : any ) => { 
            try {

                return await getAllAssessments( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}