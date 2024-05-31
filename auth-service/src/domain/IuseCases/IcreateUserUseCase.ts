import { userEntity } from "../entities/UserEntity";

export interface IcreateUserUseCase {

    execute ( data : userEntity ) : Promise < userEntity | null >
    
}
