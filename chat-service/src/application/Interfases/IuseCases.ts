import { ICreateChatUseCase, ICreateMessageUseCase, IGetChatByUseCase, IGetMessageByChatIdUseCase } from "../../domain/IuseCases";

export interface IuseCases {
    createChatUseCase : (Dependencies : any ) => ICreateChatUseCase
    createMessageUseCase : (Dependencies : any ) => ICreateMessageUseCase
    getChatByUserIdUseCase : (Dependencies : any ) => IGetChatByUseCase
    getMessageByChatIdUseCase : (Dependencies : any ) => IGetMessageByChatIdUseCase
}