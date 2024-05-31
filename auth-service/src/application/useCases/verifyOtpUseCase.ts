import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";



export const verifyOtpUseCase = (Dependencies : IDependecies) => {

    
    
    const {  repositories : { verifyOtp } } = Dependencies

    return {

        execute: async ( email : string , otp : string ) => { 
            try {

                return await verifyOtp( email , otp )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}