
export interface IFindCategoryUseCase {
    execute ( categoryName : string ) : Promise< boolean >
}