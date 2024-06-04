import { userEntity } from "../entities/UserEntity";


interface data {
    _id :string ,
    isBlocked :boolean
}

export interface IBlockUnblockUseCase {

    execute( data : data ) : Promise < boolean | null >
}
