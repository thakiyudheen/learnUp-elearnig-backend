import { Category } from "../../models";



export const findCategory = async  ( categoryName : string  ) : Promise < boolean > => {
    try {
 
        const category = await Category.findOne( { categoryName } ) ;

        if( !category ) {

            return false
        }

        return true

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}