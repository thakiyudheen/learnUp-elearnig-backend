import { IgetAllUserUseCase } from "../../domain/IUseCases";

export interface IuseCases {
    getAllStudentUseCase : ( Deoendencies : any ) => IgetAllUserUseCase
    getAllInstructorUseCase : ( Deoendencies : any ) => IgetAllUserUseCase
}