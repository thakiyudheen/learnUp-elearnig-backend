import { rejectRequestConsumer, updateUserConsumer, userCreatedConsumer, verifyRequestConsumer } from "./consumer"
import { blockUnblockConsumer } from "./consumer/blockUnblockConsumer"
import { createEnrollmentConsumer } from "./consumer/createEnrollmentConsumer"
import { resetPasswordConsumer } from "./consumer/resetPasswordConsumer"



export interface ICourseSubscriber {
    userCreated:(data: any) => Promise<void>
    resetPassword:(data: any) => Promise<void>
    blockUnblockUser:(data: any) => Promise<void>
    rejectRequest:(data: any) => Promise<void>
    verificationRequest:(data: any) => Promise<void>
    updateUser :(data: any) => Promise<void>
    createEnrollment :(data: any) => Promise<void>
    

}

export interface ICousrseSubscriber extends Pick<
    ICourseSubscriber,
                'userCreated'
                |'resetPassword'
                |"blockUnblockUser" 
                |"rejectRequest"
                |"verificationRequest"
                |"updateUser"
                |"createEnrollment"
> { }

export const createSubscriber = (): ICourseSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        resetPassword : resetPasswordConsumer,
        blockUnblockUser: blockUnblockConsumer,
        rejectRequest : rejectRequestConsumer,
        verificationRequest : verifyRequestConsumer,
        updateUser : updateUserConsumer,
        createEnrollment : createEnrollmentConsumer
    }
}