import { userEntity } from "@/domain/entities/UserEntity"


export interface IRepositories {
    isExistingUserName : ( username : string ) => Promise < boolean | null >
    findUserByEmail : ( email : string ) => Promise < userEntity | null > 
    createUser : ( data : userEntity ) => Promise < userEntity | null > 
    verifyOtp : ( email : string , otp :string  ) => Promise < boolean | null > 
}