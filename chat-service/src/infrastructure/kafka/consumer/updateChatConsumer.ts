import { updateChat } from "../../../infrastructure/database/mongodb/repositories/updateChat";




export const updateChatConsumer = async ( data: any ) => {

	try {

        console.log('the update chat kafka is working............')

		await updateChat( data )

    } catch (error: any) {

		console.log("update user consumer error: ", error);

	}

};