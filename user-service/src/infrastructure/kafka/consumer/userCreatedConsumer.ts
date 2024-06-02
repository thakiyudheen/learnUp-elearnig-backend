
import { createUser } from "../../../infrastructure/database/mongodb/repositories";
import { userEntity } from "../../../domain/entities/UserEntity";

 export const userCreatedConsumer =async ( data : userEntity ) => {
    try {
        
        await createUser(data)

    } catch {

    }
} 