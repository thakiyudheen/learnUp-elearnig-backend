import { userEntity } from "../../../domain/entities/UserEntity";
import { updateUser } from "../../../infrastructure/database/mongodb/repositories/updateUser";



export const updateUserConsumer = async (data: userEntity) => {

	try {

        console.log('the update user kafksa is working............')

		await updateUser( data )

    } catch (error: any) {

		console.log("update user consumer error: ", error);

	}

};