import { blockUnblockConsumer, rejectRequestConsumer, updateUserConsumer, verifyRequestConsumer } from "./consumers";
import { coursePurchaseSuccessConsumer } from "./consumers/coursePurchaseSuccessConsumer";
import sendVerificationMailConsumer from "./consumers/verificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
	blockUnblockUser(data : any ) : Promise<void>;
	verificationRequest(data : any ) : Promise<void>;
	rejectRequest(data : any ) : Promise<void>;
	updateUser(data : any ) : Promise<void>;
	coursePurchaseSuccess(data : any ) : Promise<void>;
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, 
		"sendVerificationMail"
		|"blockUnblockUser"
		|"verificationRequest"
		|"rejectRequest"
		|"updateUser"
		|"coursePurchaseSuccess"
	> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {

		sendVerificationMail: sendVerificationMailConsumer,
		blockUnblockUser : blockUnblockConsumer,
		verificationRequest : verifyRequestConsumer,
		rejectRequest : rejectRequestConsumer,
		updateUser : updateUserConsumer,
		coursePurchaseSuccess:coursePurchaseSuccessConsumer
	}
};