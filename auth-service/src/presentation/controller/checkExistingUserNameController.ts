import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const checkExistingUserNameController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { checkExistingUserNameUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { username } = req.params
           

            const  isExist = await checkExistingUserNameUseCase(Dependencies).execute(username)
           
            if(isExist){
              return res.status(200).json( { 

                    success: true,
                    data: {},
                    message: "username is unique", 
                } )
            } else {

                return  res.status(200).json( { 

                    success: false,
                    data: {},
                    message: "username is already taken", 

                } )

            }
          

        } catch ( error : any ) {
           
            next(error)
        }
    }
}