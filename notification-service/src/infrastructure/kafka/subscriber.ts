import forgetPasswordMailConsumer from "./consumers/forgetPasswordMailConsumer";
import rejectRequestConsumer from "./consumers/rejectRequestConsumer";
import verifyRequestConsumer from "./consumers/verifyRequestConsumer";


interface ISubscriber {
    verificationRequestMail(data: any): Promise<void>;
    forgetPassword(data: any): Promise<void>;
    rejectRequestMail(data: any): Promise<void>;
}

export interface INotificationSubscriber extends Pick<ISubscriber, 
                'verificationRequestMail'
                |'forgetPassword'
                |'rejectRequestMail'
                  > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        verificationRequestMail : verifyRequestConsumer,
        forgetPassword : forgetPasswordMailConsumer,
        rejectRequestMail : rejectRequestConsumer
    }
}