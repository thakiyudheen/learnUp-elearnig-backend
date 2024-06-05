import { forgetPasswordEmail } from "../../../infrastructure/services/mail";



export default async (data : {email: string , token : string }) => {
	try {
        console.log("forget password consumer -------->");

		await forgetPasswordEmail(data)

	} catch (error: any) {

		console.log("the error from consuming forgetPassword: ", error?.message);
	}
};