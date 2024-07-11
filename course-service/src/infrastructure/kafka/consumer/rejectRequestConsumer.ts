import { rejectRequest } from "../../../infrastructure/database/mongodb/repositories";



export const rejectRequestConsumer = async (data: { email: string; isVerified: boolean }) => {

	try {

		await rejectRequest( data )

    } catch (error: any) {

		console.log("reject-instructor-consumer error: ", error?.message);

	}

};