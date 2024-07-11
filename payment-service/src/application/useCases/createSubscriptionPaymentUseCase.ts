import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";




export const createSubscriptionPaymentUseCase = (Dependencies : IDependecies ) => {

    
    
    const {  repositories : { createSubscriptionPayment } } = Dependencies

    return {

        execute: async ( data : any ) => { 
            try {

                return await createSubscriptionPayment( data )

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}