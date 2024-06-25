import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";

interface EnrollmentQueryParams {
    userId?: string;
    page: number;
    limit: number;
    search?: string;
    categories?: string[];
    levels?: string[];
    sort?: 'asc' | 'desc';
  }

export const getEnrollmentByIdController = ( Dependencies : IDependecies ) => {
   
    const { useCases : { getEnrollmentByIdUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            
            console.log('thsi is  use  id',req.query)
            const data: EnrollmentQueryParams = {
                userId: req.query.userId as string,
                page: parseInt(req.query.page as string, 10), 
                limit: parseInt(req.query.limit as string, 10), 
                search: req.query.search as string,
                categories: req.query.categories as string[],
                levels: req.query.levels as string[],
                sort: req.query.sort as 'asc' | 'desc'
              };
           

            const enrollment = await getEnrollmentByIdUseCase( Dependencies ).execute( data )
            
            if(!enrollment){

                throw new Error('Error while fetching Enrollment')
               
            }

            return  res.status(200).json( { 

                success: true,
                data: enrollment,
                message: "Enrollment fetched Successfully", 

            } )
        

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}