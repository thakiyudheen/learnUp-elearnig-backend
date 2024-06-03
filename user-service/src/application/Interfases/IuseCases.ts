import { IGetAllInstructorUseCase, IGetAllStudentUseCase } from "../../domain/IUseCases";

export interface IuseCases {
    getAllStudentUseCase : (Dependencies : any ) => IGetAllStudentUseCase,
    getAllInstructorUseCase : (Dependencies : any ) => IGetAllInstructorUseCase
}