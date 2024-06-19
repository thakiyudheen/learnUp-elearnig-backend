

import { IRejectRequestUseCase } from "@/domain/IUseCases/IRejectRequestUseCase";
import { 
    IBlockUnblockUseCase,
    IGetAllInstructorUseCase,
    IGetAllStudentUseCase, 
    IGetRequestUseCase, 
    IUpdateUserUseCase, 
    IVerificationRequestUseCase } from "../../domain/IUseCases";

export interface IuseCases {

    getAllStudentUseCase : (Dependencies : any ) => IGetAllStudentUseCase,
    getAllInstructorUseCase : (Dependencies : any ) => IGetAllInstructorUseCase,
    blockUnblockUserUseCase : ( Dependencies : any ) => IBlockUnblockUseCase,
    verificationRequestUseCase : ( Dependencies : any ) => IVerificationRequestUseCase,
    getRequestUseCase : ( Dependencies : any ) => IGetRequestUseCase,
    rejectRequestUseCase : ( Dependencies : any ) => IRejectRequestUseCase
    updateUserUseCase : ( Dependencies : any ) => IUpdateUserUseCase

}