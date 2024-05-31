

import { Dependencies } from "../../_boot/dependecies";
import { NextFunction, Request, Response } from "express";
import { IDependecies } from "../Interfases/IDependencies";
import { userEntity } from "../../domain/entities/UserEntity";
import { comparePassword } from "../../_lib/http/bcrypt";


export const loginUseCase = (Dependencies : IDependecies) => {

    
    const { repositories : { findUserByEmail } } = Dependencies
    

    return {

        execute : async ( email : string , password : string ) : Promise < userEntity | null  > => { 
            try {
                
                const user : userEntity | null = await findUserByEmail( email )

                if (!user) {

                    throw new Error('User not found');

                }

                const isMatch = await comparePassword( password , user.password )

                if(!isMatch) {
                    throw new Error ('password does not match')
                }

                return user
                
                  

            } catch ( error : any ) {

                console.error("Login user use case error:", error.message);
                return null


            }

        }
    }
}