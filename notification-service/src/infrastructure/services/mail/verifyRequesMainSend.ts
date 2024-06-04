import { verifyRequestMail } from "../../../_lib/utils/nodeMailer";


export const verifyRequestMailSend = async (email: string) => {
	try {
		// send verification req mail ----------------
		await verifyRequestMail( email );

	} catch (error: any) {
		console.log(error);
	}
};