import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models";



export const editCategory = async  ( data : {_id : string , categoryName : string , isBlocked : boolean }) : Promise < CategoryEntity > => {
    try {
 
        const category = await Category.findByIdAndUpdate( data._id, {

            categoryName : data.categoryName,

            isBlocked: data.isBlocked

        }, { new: true });

        if( !category ) {

            throw new Error('category editing Failed ')

        }

        return category

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}