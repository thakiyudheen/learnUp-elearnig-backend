import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const getAllCategoryController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getAllCategoryUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const category = await getAllCategoryUseCase( Dependencies ).execute( req.query )
            
            if(category){

                return  res.status(200).json( { 

                    success: true,
                    data: category,
                    message: "Category find Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while geting category", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}