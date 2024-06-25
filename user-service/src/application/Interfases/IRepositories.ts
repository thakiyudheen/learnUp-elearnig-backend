import { userEntity } from "@/domain/entities/UserEntity";


interface data {
    _id :string ,
    isBlocked :boolean
}



export interface IRepositories {
    
    getAllStudents : (  data: { page?:number,limit?:number}) => Promise < { students: userEntity[],totalItems: number} | null >
    getAllInstructors : ( data: { page?:number,limit?:number}) => Promise <  { instructors: userEntity[],totalItems: number} | null >
    blockUnblock : ( data : data ) => Promise < void >
    verifyRequest : ( data : {email : string ,isVerified : boolean }) => Promise < void >
    getRequest : (data: { page?:number,limit?:number} ) => Promise <  { requested: userEntity[],totalItems: number} | null >
    rejectRequest : (data : {email : string ,isVerified : boolean }) => Promise < void >
    updateUser : (data : userEntity) => Promise < userEntity | null >
}