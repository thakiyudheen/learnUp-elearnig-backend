import { IcheckExistingUserNameUseCase, IcreateUserUseCase, IfindUserByEmail, IloginUseCase, IupdateOtpUseCase, IverifyOtpUseCase } from "../../domain/IuseCases";

export interface IuseCases {
    checkExistingUserNameUseCase : ( Dependencies : any ) => IcheckExistingUserNameUseCase
    findUserByEmail : (Dependencies : any ) => IfindUserByEmail
    loginUseCase : (Dependencies : any ) => IloginUseCase
    createUserUseCase : (Dependencies : any ) => IcreateUserUseCase
    verifyOtpUseCase : (Deopendencies : any ) => IverifyOtpUseCase
    

}