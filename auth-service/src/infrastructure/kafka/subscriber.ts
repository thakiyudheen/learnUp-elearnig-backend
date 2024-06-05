import { blockUnblockConsumer, rejectRequestConsumer, verifyRequestConsumer } from "./consumers";
import sendVerificationMailConsumer from "./consumers/verificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
	blockUnblockUser(data : any ) : Promise<void>;
	verificationRequest(data : any ) : Promise<void>;
	rejectRequest(data : any ) : Promise<void>;
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, 
		"sendVerificationMail"
		|"blockUnblockUser"
		|"verificationRequest"
		|"rejectRequest"
	> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {

		sendVerificationMail: sendVerificationMailConsumer,
		blockUnblockUser : blockUnblockConsumer,
		verificationRequest : verifyRequestConsumer,
		rejectRequest : rejectRequestConsumer
	}
};