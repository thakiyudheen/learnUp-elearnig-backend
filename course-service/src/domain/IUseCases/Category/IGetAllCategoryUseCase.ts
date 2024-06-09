import { CategoryEntity } from "@/domain/entities";

export interface IGetAllCategoryUseCase {
    execute ( ) : Promise< CategoryEntity[] >
}