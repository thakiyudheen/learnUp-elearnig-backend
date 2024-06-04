import { verifyRequest } from "../../../infrastructure/database/mongodb/repositories/verifyRequest";

export const verifyRequestConsumer = async (data: { email: string; isVerified: boolean }) => {

	try {

		await verifyRequest( data )

    } catch (error: any) {

		console.log("block-unblock-user-consumer error: ", error?.message);

	}

};