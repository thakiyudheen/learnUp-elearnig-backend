import { userEntity } from "@/domain/entities/UserEntity";


interface data {
    _id :string ,
    isBlocked :boolean
}
export interface IRepositories {
    
    getAllStudents : ( ) => Promise < userEntity[] | null >
    getAllInstructors : ( ) => Promise < userEntity[] | null >
    blockUnblock : ( data : data ) => Promise < void >
}