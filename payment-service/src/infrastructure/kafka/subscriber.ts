import {  updateUserConsumer } from "./consumer"
import userCreatedConsumer from "./consumer/userCreatedConsumer"




export interface ISubscriber {
    userCreated:(data: any) => Promise<void>
    updateUser(data : any ) : Promise<void>;
}

export interface IPaymentSubscriber extends Pick<
    ISubscriber,'userCreated'
                |'updateUser'
                
> { }

export const createSubscriber = (): ISubscriber => {
    return {
        userCreated : userCreatedConsumer,
        updateUser : updateUserConsumer,
    }
}