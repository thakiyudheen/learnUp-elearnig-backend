import { userEntity } from "../entities/UserEntity";


export interface IGetAllInstructorUseCase {

    execute () : Promise < userEntity[] | null >
}
