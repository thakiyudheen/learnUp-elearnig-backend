import { userEntity } from "../entities/UserEntity";

export interface IgetAllInstrutorUseCase {

    execute : ( ) => Promise < userEntity[] | null >

}