import { rejectRequestMail } from "../../../_lib/utils/nodeMailer/rejectRequestMail";



export const rejectRequestMailSend = async (email: string) => {
	try {
		// send reject mail  ----------------
		await rejectRequestMail( email );

	} catch (error: any) {

		console.log(error);
	}
};