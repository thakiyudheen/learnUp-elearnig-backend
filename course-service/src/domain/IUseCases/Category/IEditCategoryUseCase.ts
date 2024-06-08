import { CategoryEntity } from "@/domain/entities";

export interface IEditCategoryUseCase {

    execute  (data : {_id : string , categoryName : string , isBlocked : boolean }) : Promise<CategoryEntity>
    
}