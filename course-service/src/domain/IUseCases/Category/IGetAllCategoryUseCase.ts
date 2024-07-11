import { CategoryEntity } from "@/domain/entities";

export interface IGetAllCategoryUseCase {
    execute ( data:{ page?:number , limit ?:number} ) : Promise< CategoryEntity[] >
}