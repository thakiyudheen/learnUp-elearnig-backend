import { userEntity } from "../entities/UserEntity";

interface PaginationData {
    instructors: userEntity[];
    totalItems: number;
}

export interface IGetAllInstructorUseCase {

    execute ( data: { page?:number,limit?:number}) : Promise < PaginationData | null >
}
