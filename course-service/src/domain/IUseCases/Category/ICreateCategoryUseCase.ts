import { CategoryEntity } from "@/domain/entities";

export interface ICreateCategoryUseCase {
    execute ( categoryName : string ) : Promise< CategoryEntity >
}