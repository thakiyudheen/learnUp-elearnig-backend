

import { 
    IBlockUnblockUseCase,
    IGetAllInstructorUseCase,
    IGetAllStudentUseCase, 
    IGetRequestUseCase, 
    IVerificationRequestUseCase } from "../../domain/IUseCases";

export interface IuseCases {

    getAllStudentUseCase : (Dependencies : any ) => IGetAllStudentUseCase,
    getAllInstructorUseCase : (Dependencies : any ) => IGetAllInstructorUseCase,
    blockUnblockUserUseCase : ( Dependencies : any ) => IBlockUnblockUseCase,
    verificationRequestUseCase : ( Dependencies : any ) => IVerificationRequestUseCase,
    getRequestUseCase : ( Dependencies : any ) => IGetRequestUseCase

}