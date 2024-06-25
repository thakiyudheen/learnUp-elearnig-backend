import { Dependencies } from "@/_boot/dependecies";
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import { ParsedUrlQuery } from "querystring";


export const getReviewsController = ( Dependencies : IDependecies ) => {
   
    const { useCases : {  getReviewsUseCase } } = Dependencies
    
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const courseId: string = req.query?.courseId as string;
            const page: number = req.query?.page ? parseInt(req.query.page as string) : 1;
            const limit: number = req.query?.limit ? parseInt(req.query.limit as string) : 5;
            
            const data = {
                courseId: courseId || 'defaultCourseId',
                page: page || 1,
                limit: limit || 5,
            };

            console.log('get review data', req.query)
           

            const review = await getReviewsUseCase( Dependencies ).execute( data )
            
            if(review){

                return  res.status(200).json( { 

                    success: true,
                    data: review,
                    message: "Review fetched Successfully", 
    
                } )
            }

            return  res.status(200).json( { 

                success: false,
                data: {},
                message: "filure while getting review", 

            } )
          

            

        } catch ( error : any ) {
           
            next(error)
        }
    }
}