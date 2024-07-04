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
import { ICreateEnrollmentUseCase, IGetEnrollmentByIdUseCase, IGetInstructorsForChatUseCase, IGetProgressByIdUseCase, IGetStudentsForChatUseCase, IIsEnrollmentExistUseCase, IUpdateEnrollmentUseCase, IUpdateProgressByIdUseCase } from "@/domain/IUseCases/enrollment";
import { ICreateReveiwUseCase, IGetReveiwsUseCase } from "@/domain/IUseCases/review";
import { IGetMoreEnrolledCourseUseCase} from "@/domain/IUseCases/enrollment/IGetMoreEntrolledCoursesUseCase";
import { ICreateAssessmentUseCase, IDeleteAssessmentUseCase, IGetAllAssessmentUseCase, IUpdateAssessmentUseCase } from "@/domain/IUseCases/assessment";

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
    getProgressByIdUseCase : ( Dependecies : IDependecies ) => IGetProgressByIdUseCase
    updateProgressByIdUseCase : ( Dependecies : IDependecies ) => IUpdateProgressByIdUseCase
    createReviewUseCase : ( Dependecies : IDependecies ) => ICreateReveiwUseCase
    getReviewsUseCase : ( Dependecies : IDependecies ) => IGetReveiwsUseCase
    getStudentsForChatUseCase : ( Dependecies : IDependecies ) => IGetStudentsForChatUseCase
    getInstructorsForChatUseCase : ( Dependecies : IDependecies ) => IGetInstructorsForChatUseCase
    isEnrollmentExistUseCase : ( Dependecies : IDependecies ) => IIsEnrollmentExistUseCase
    getMoreEnrolledCourseUseCase: ( Dependecies : IDependecies ) => IGetMoreEnrolledCourseUseCase
    createAssessmentUseCase: ( Dependecies : IDependecies ) => ICreateAssessmentUseCase
    getAllAssessmentUseCase: ( Dependecies : IDependecies ) => IGetAllAssessmentUseCase
    deleteAssessmentUseCase: ( Dependecies : IDependecies ) => IDeleteAssessmentUseCase
    updateAssessmentUseCase: ( Dependecies : IDependecies ) => IUpdateAssessmentUseCase
    updateEnrollmenteUseCase: ( Dependecies : IDependecies ) => IUpdateEnrollmentUseCase

}