import { ICreateCategoryUseCase, IEditCategoryUseCase, IFindCategoryUseCase } from "@/domain/IUseCases/Category";
import { IDependecies } from "./IDependencies";

export interface IuseCases {
    createCategoryUseCase : ( Dependencies : IDependecies ) => ICreateCategoryUseCase,
    editCategoryUseCase : ( Dependencies : IDependecies ) => IEditCategoryUseCase,
    findCategoryUseCase : ( Dependecies : IDependecies ) => IFindCategoryUseCase
}