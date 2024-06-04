import { userEntity } from "@/domain/entities/UserEntity";


export interface IRepositories {
    
    getAllStudents : ( ) => Promise < userEntity[] | null >
    getAllInstructors : ( ) => Promise < userEntity[] | null >
}