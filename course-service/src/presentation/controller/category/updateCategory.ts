import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const updateCategoryController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { editCategoryUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('updating data',req.body)
            
           
            const category = await editCategoryUseCase( Dependencies ).execute( req.body )
        
            if(category){

                return  res.status(200).json( { 

                    success: true,
                    data: category,
                    message: "category updated Successfully", 
    
                } )

            }
            return  res.status(200).json( { 

                success: false,
                data:{},
                message: "Error while updating the category", 

            } )

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}