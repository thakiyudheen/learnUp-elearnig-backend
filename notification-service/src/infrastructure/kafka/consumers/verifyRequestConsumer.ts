import { verifyRequestMailSend } from "@/infrastructure/services/mail";



export default async (email: string) => {
	try {
        
		await verifyRequestMailSend(email)

		console.log("instructor verified consumer -------->");

	} catch (error: any) {

		console.log("insturctor verified consumed mail send error: ", error?.message);
	}
};