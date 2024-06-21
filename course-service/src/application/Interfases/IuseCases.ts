import { 
    ICreateCategoryUseCase,
    ICreateCourseUseCase,
    IEditCategoryUseCase, 
    IFindCategoryUseCase, 
    IGetAllCategoryUseCase 
} from "@/domain/IUseCases/Category";
import { IDependecies } from "./IDependencies";
import { IGetAllCourseUseCase, IUpdateAllCourseUseCase } from "@/domain/IUseCases/course";
import { IUpdateCourseUseCase } from "@/domain/IUseCases/course/IUpdateCourseUseCase";
import { IFindCourseByIdUseCase } from "@/domain/IUseCases/course/IFindCourseByIdUseCase";
import { ICreateEnrollmentUseCase, IGetEnrollmentByIdUseCase } from "@/domain/IUseCases/enrollment";

export interface IuseCases {
    createCategoryUseCase : ( Dependencies : IDependecies ) => ICreateCategoryUseCase,
    editCategoryUseCase : ( Dependencies : IDependecies ) => IEditCategoryUseCase,
    findCategoryUseCase : ( Dependecies : IDependecies ) => IFindCategoryUseCase,
    getAllCategoryUseCase : ( Dependecies : IDependecies ) => IGetAllCategoryUseCase,
    createCourseUseCase : ( Dependecies : IDependecies ) => ICreateCourseUseCase,
    getAllCourseUseCase : ( Dependecies : IDependecies ) => IGetAllCourseUseCase,
    updateCourseUseCase : ( Dependecies : IDependecies ) => IUpdateCourseUseCase,
    findCourseByIdUseCase : ( Dependecies : IDependecies ) => IFindCourseByIdUseCase,
    updateAllCourseUseCase : ( Dependecies : IDependecies ) => IUpdateAllCourseUseCase ,
    getEnrollmentByIdUseCase : ( Dependecies : IDependecies ) => IGetEnrollmentByIdUseCase ,
    createEnrollmentUseCase : ( Dependecies : IDependecies ) => ICreateEnrollmentUseCase 

}