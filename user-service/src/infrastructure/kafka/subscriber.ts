import userCreatedConsumer from "./consumer/userCreatedConsumer"



export interface ISubscriber {
    userCreated:(data: any) => Promise<void>
}

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated' 
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer
    }
}