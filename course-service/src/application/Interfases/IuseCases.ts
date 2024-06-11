import { 
    ICreateCategoryUseCase,
    ICreateCourseUseCase,
    IEditCategoryUseCase, 
    IFindCategoryUseCase, 
    IGetAllCategoryUseCase 
} from "@/domain/IUseCases/Category";
import { IDependecies } from "./IDependencies";

export interface IuseCases {
    createCategoryUseCase : ( Dependencies : IDependecies ) => ICreateCategoryUseCase,
    editCategoryUseCase : ( Dependencies : IDependecies ) => IEditCategoryUseCase,
    findCategoryUseCase : ( Dependecies : IDependecies ) => IFindCategoryUseCase,
    getAllCategoryUseCase : ( Dependecies : IDependecies ) => IGetAllCategoryUseCase,
    createCourseUseCase : ( Dependecies : IDependecies ) => ICreateCourseUseCase
}