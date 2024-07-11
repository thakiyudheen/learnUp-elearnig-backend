import { MessageEntity } from "../entities";

export interface IGetMessageByChatIdUseCase {
    execute (data: {chat:string}) : Promise <  MessageEntity[] >
}
