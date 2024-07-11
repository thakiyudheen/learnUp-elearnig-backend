import { resetPassword } from "../database/mongodb/repositories"
import { coursePurchaseSuccessConsumer } from "./consumer"
import userCreatedConsumer from "./consumer/userCreatedConsumer"



export interface ISubscriber {
    userCreated:(data: any) => Promise<void>
    resetPassword:(data: any) => Promise<void>
    coursePurchaseSuccess:(data: any) => Promise<void>
}

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated'
                |'resetPassword'
                |'coursePurchaseSuccess' 
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        resetPassword : resetPassword,
        coursePurchaseSuccess : coursePurchaseSuccessConsumer
    }
}