import { Chat } from "../models";


export const updateChat = async (data: any): Promise<any> => {
    try {

        const chat = await Chat.updateOne({
            _id: data.chatId

        },
            {
                $set: {
                    subscriptionType: data?.subscriptionType
                }
            })


        if (!chat) {

            throw new Error("updating chat error")

        }


        
    } catch (error: any) {


        throw new Error(error?.message);

    }
}