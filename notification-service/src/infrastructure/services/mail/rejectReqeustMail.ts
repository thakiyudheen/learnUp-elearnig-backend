import { verifyRequestMail } from "../../../_lib/utils/nodeMailer";


export const rejectRequestMailSend = async (email: string) => {
	try {
		// send reject mail  ----------------
		await verifyRequestMail( email );

	} catch (error: any) {
        
		console.log(error);
	}
};