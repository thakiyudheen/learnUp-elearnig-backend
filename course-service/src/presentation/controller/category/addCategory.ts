import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";


export const addCategoryController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { createCategoryUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const  { categoryName } = req.body ;
           

            const category = await createCategoryUseCase( Dependencies ).execute( categoryName )
            
            if(category){

                return  res.status(200).json( { 

                    success: true,
                    data: category,
                    message: "Category created Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while creating category", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}