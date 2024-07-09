import { coursePurchaseSuccessConsumer, updateUserConsumer } from "./consumer"
import { updateChatConsumer } from "./consumer/updateChatConsumer";
import userCreatedConsumer from "./consumer/userCreatedConsumer"




export interface ISubscriber {
    coursePurchaseSuccess:(data: any) => Promise<void>
    userCreated:(data: any) => Promise<void>
    updateUser(data : any ) : Promise<void>;
    updateChat(data : any ) : Promise<void>;
}

export interface IUserSubscriber extends Pick<
    ISubscriber,'coursePurchaseSuccess' 
                |'userCreated'
                |'updateUser'
                |'updateChat'
> { }

export const createSubscriber = (): ISubscriber => {
    return {
        coursePurchaseSuccess : coursePurchaseSuccessConsumer,
        userCreated : userCreatedConsumer,
        updateUser : updateUserConsumer,
        updateChat : updateChatConsumer
    }
}