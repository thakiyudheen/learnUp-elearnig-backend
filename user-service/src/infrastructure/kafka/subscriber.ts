import { resetPassword } from "../database/mongodb/repositories"
import userCreatedConsumer from "./consumer/userCreatedConsumer"



export interface ISubscriber {
    userCreated:(data: any) => Promise<void>
    resetPassword:(data: any) => Promise<void>
}

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated'|
                'resetPassword' 
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        resetPassword : resetPassword
    }
}