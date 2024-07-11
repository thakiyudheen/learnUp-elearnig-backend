import { rejectRequestMailSend } from "../../../infrastructure/services/mail";



export default async (email: string) => {
	try {
        console.log("reject request consumer -------->");

		await rejectRequestMailSend( email )

		

	} catch (error: any) {

		console.log("insturctor reject request mail send error: ", error?.message);
	}
};