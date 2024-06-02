import { userEntity } from "../entities/UserEntity";

export interface IgetUserDataUseCase {

    execute (userId : string ) : Promise < userEntity | null >
}
