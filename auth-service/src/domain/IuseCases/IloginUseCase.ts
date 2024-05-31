import { userEntity } from "../entities/UserEntity";

export interface IloginUseCase {

    execute (email : string , password : string ) : Promise < userEntity | null >
}
