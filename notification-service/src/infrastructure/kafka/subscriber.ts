import verifyRequestConsumer from "./consumers/verifyRequestConsumer";


interface ISubscriber {
    verificationRequest(data: any): Promise<void>;
   
}

export interface INotificationSubscriber extends Pick<ISubscriber, 'userCreated'  > { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        verificationRequest : verifyRequestConsumer,
    }
}