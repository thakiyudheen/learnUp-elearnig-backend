
import { userEntity } from "@/domain/entities/UserEntity";
import { createUser } from "../../../infrastructure/database/mongodb/repositories/user";



 export default async ( data : userEntity ) => {
    try {
        console.log('the usercreation kafka working',data)
        await createUser(data)

    } catch ( error : any ) {
        throw new Error("Kafka Consume Error : " + error?.message);
    }
} 