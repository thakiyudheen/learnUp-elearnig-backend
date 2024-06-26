import { ICreateChatUseCase, ICreateMessageUseCase, IGetChatByUseCase } from "../../domain/IuseCases";

export interface IuseCases {
    createChatUseCase : (Dependencies : any ) => ICreateChatUseCase
    createMessageUseCase : (Dependencies : any ) => ICreateMessageUseCase
    getChatByUserIdUseCase : (Dependencies : any ) => IGetChatByUseCase
}