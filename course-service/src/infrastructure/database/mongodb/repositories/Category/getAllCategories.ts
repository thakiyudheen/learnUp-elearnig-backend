import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models";
import { log } from "console";



export const getAllCategories = async  ( data : { page ?: number , limit ?: number } ) : Promise < CategoryEntity[] > => {
    try {
        
        let category;
        
        
        if(data?.page && data?.limit ){
            
            
            category = await Category.find( ).skip((data.page - 1) * data.limit).limit(data.limit) ;
            
        }else{
            
            category = await Category.find( ) ;
            
        }
       
        

        if( !category ) {

            throw new Error('category finding Failed ')
        }

        return category

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}