import { userEntity } from "../entities/UserEntity";

export interface IupdateOtpUseCase {

    execute ( email : string , otp : string ) : Promise < boolean | null >
    
}