import verifyRequestConsumer from "./consumers/verifyRequestConsumer";


interface ISubscriber {
    verificationRequestMail(data: any): Promise<void>;
   
}

export interface INotificationSubscriber extends Pick<ISubscriber, 'verificationRequestMail'  > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        verificationRequestMail : verifyRequestConsumer
    }
}