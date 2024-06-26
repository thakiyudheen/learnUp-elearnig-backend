import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { createChatController } from "./createChat";
import { createMessageController } from "./createMessage";
import { getChatByUserIdController } from "./getChatByUserId";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        createChat : createChatController(Dependencies),
        createMessage : createMessageController(Dependencies),
        getChatByUserId : getChatByUserIdController(Dependencies),
    }
}