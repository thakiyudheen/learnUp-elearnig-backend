import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const findCategoryController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { findCategoryUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { categoryName } = req.params ;
            console.log('find data', req.params)
           

            const category = await findCategoryUseCase( Dependencies ).execute( categoryName )
            
            if(category){

                return  res.status(200).json( { 

                    success: true,
                    data: category,
                    message: "Category has existed", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "Category is not exist/unique", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}