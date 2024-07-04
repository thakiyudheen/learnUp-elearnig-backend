
import { ICreatePaymentUseCase, ICreateSessionUseCase, IGetAllPaymentUseCase } from "../../domain/IUseCases";
import { IDependecies } from "./IDependencies";

export interface IuseCases {
    createSessionUseCase : ( Dependencies : IDependecies) => ICreateSessionUseCase ;
    createPaymentUsecase : ( Dependencies : IDependecies) => ICreatePaymentUseCase ;
    getAllPaymentUsecase : ( Dependencies : IDependecies) => IGetAllPaymentUseCase ;
}