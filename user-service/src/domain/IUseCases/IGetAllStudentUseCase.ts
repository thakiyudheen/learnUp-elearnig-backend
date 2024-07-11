import { userEntity } from "../entities/UserEntity";

interface PaginationData {
    students: userEntity[];
    totalItems: number;
}

export interface IGetAllStudentUseCase {

    execute ( data: { page?:number,limit?:number}) : Promise <PaginationData  | null >
}
