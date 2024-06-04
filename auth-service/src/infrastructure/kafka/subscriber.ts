import { blockUnblockConsumer } from "./consumers";
import sendVerificationMailConsumer from "./consumers/verificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
	blockUnblock(data : any ) : Promise<void>;
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, 
		"sendVerificationMail"
		|"blockUnblock"
	> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {
		sendVerificationMail: sendVerificationMailConsumer,
		blockUnblock : blockUnblockConsumer
	};
};