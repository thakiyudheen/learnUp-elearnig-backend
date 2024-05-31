import { userEntity } from "../entities/UserEntity";

export interface IfindUserByEmail {

    execute (email : string ) : Promise < userEntity | null >
}
