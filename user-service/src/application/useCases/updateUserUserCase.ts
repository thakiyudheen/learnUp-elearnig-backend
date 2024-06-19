import { Dependencies } from "@/_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";
import { userEntity } from "@/domain/entities/UserEntity";


export const updateUserUseCase = ( Dependencies : IDependecies) => {

    
    
    const {  repositories : { updateUser } } = Dependencies

    return {

        execute: async ( data : userEntity  ) => { 
            try {

                return await updateUser( data )  

            } catch ( error : any ) {

                throw new Error(error?.message);

            }

        }
    }
}