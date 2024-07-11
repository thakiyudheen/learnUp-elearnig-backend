import { getMessageByChatId } from "@/infrastructure/database/mongodb/repositories";
import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { createChatController } from "./createChat";
import { createMessageController } from "./createMessage";
import { getChatByUserIdController } from "./getChatByUserId";
import { getMessageByChatIdController } from "./getMessagebychatId";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        createChat : createChatController(Dependencies),
        createMessage : createMessageController(Dependencies),
        getChatByUserId : getChatByUserIdController(Dependencies),
        getMessageByChatId : getMessageByChatIdController(Dependencies),
    }
}