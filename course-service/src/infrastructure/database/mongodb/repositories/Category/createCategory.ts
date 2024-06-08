import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models";



export const createCategory = async  ( categoryName : string  ) : Promise < CategoryEntity > => {
    try {
 
        const category = await Category.create( { categoryName } ) ;

        if( !category ) {

            throw new Error('category Creation Failed ')
        }

        return category

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}