import { 
    ICreateCategoryUseCase,
    ICreateCourseUseCase,
    IEditCategoryUseCase, 
    IFindCategoryUseCase, 
    IGetAllCategoryUseCase 
} from "@/domain/IUseCases/Category";
import { IDependecies } from "./IDependencies";
import { IGetAllCourseUseCase } from "@/domain/IUseCases/course";
import { IUpdateCourseUseCase } from "@/domain/IUseCases/course/IUpdateCourseUseCase";

export interface IuseCases {
    createCategoryUseCase : ( Dependencies : IDependecies ) => ICreateCategoryUseCase,
    editCategoryUseCase : ( Dependencies : IDependecies ) => IEditCategoryUseCase,
    findCategoryUseCase : ( Dependecies : IDependecies ) => IFindCategoryUseCase,
    getAllCategoryUseCase : ( Dependecies : IDependecies ) => IGetAllCategoryUseCase,
    createCourseUseCase : ( Dependecies : IDependecies ) => ICreateCourseUseCase
    getAllCourseUseCase : ( Dependecies : IDependecies ) => IGetAllCourseUseCase
    updateCourseUseCase : ( Dependecies : IDependecies ) => IUpdateCourseUseCase
}