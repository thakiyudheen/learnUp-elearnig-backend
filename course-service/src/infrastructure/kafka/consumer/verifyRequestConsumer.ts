import { verifyRequest } from "../../../infrastructure/database/mongodb/repositories";


export const verifyRequestConsumer = async (data: { email: string; isVerified: boolean }) => {

	try {

		await verifyRequest( data )

    } catch (error: any) {

		console.log("verify request consumrer error: ", error?.message);

	}

};