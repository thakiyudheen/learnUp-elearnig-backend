import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models";



export const getAllCategories = async  ( ) : Promise < CategoryEntity[] > => {
    try {
 
        const category = await Category.find( ) ;

        if( !category ) {

            throw new Error('category finding Failed ')
        }

        return category

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}