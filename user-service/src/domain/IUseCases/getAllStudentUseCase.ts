import { userEntity } from "../entities/UserEntity";

export interface IgetAllUserUseCase {

    execute : ( ) => Promise < userEntity[] | null >

}