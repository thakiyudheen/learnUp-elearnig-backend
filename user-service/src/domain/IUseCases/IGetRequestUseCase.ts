import { userEntity } from "../entities/UserEntity";

interface PaginationData {
    requested: userEntity[];
    totalItems: number;
}


export interface IGetRequestUseCase {

    execute ( data: { page?:number,limit?:number}) : Promise < PaginationData | null >
}
