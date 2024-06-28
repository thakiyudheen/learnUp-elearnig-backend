import { coursePurchaseSuccessConsumer } from "./consumer"
import userCreatedConsumer from "./consumer/userCreatedConsumer"




export interface ISubscriber {
    coursePurchaseSuccess:(data: any) => Promise<void>
    userCreated:(data: any) => Promise<void>
}

export interface IUserSubscriber extends Pick<
    ISubscriber,'coursePurchaseSuccess' 
                |'userCreated'
> { }

export const createSubscriber = (): ISubscriber => {
    return {
        coursePurchaseSuccess : coursePurchaseSuccessConsumer,
        userCreated : userCreatedConsumer
    }
}