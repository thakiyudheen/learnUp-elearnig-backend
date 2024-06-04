import { userEntity } from "../entities/UserEntity";


export interface IGetRequestUseCase {

    execute () : Promise < userEntity[] | null >
}
