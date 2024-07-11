import { userEntity } from "../entities/UserEntity";


export interface IUpdateUserUseCase {

    execute ( data : userEntity) : Promise < userEntity | null >
}
