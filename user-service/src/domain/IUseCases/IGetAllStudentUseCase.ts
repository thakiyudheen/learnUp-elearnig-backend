import { userEntity } from "../entities/UserEntity";


export interface IGetAllStudentUseCase {

    execute () : Promise < userEntity[] | null >
}
