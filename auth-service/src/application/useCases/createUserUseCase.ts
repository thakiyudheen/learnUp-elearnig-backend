import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";
import { userEntity } from "@/domain/entities/UserEntity";



export const createUserUseCase = (Dependencies : IDependecies) => {  

    const {  repositories : { createUser } } = Dependencies

    return {

        execute: async ( data : userEntity ) => { 
            try {

                return await createUser( data )  

            } catch ( error : any ) {

                throw new Error( error.message || " User creation failed ") ;

            }

        }
    }
}