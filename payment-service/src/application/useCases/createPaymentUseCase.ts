import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


// sda

export const createPaymentUsecase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createPayment } } = Dependencies

    return {

        execute: async ( data : any ) => { 
            try {

                return await createPayment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}