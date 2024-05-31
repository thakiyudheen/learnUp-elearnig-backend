// import verificationMailConsumer from "./consumers/verificationMailConsumer";

// export interface ISubscriber {
//     verificationMail(data: any): Promise<void>;
//  }
//  export interface IAuthSubscriber extends Pick<ISubscriber, "verificationMail"> {}

//  export const createSubscriber = (): IAuthSubscriber => {
//     return {
//        verificationMail: verificationMailConsumer,
//     };
//  }

import sendVerificationMailConsumer from "./consumers/verificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, "sendVerificationMail"> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {
		sendVerificationMail: sendVerificationMailConsumer,
	};
};