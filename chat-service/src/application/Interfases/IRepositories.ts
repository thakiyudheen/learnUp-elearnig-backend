import { ChatEntity, MessageEntity } from "../../domain/entities";


export interface IRepositories {
    createChat : ( data : ChatEntity ) => Promise < ChatEntity >
    createMessage : ( data : MessageEntity ) => Promise < MessageEntity >
    getChatByUserId : ( data : {userId:string} ) => Promise < any >
}