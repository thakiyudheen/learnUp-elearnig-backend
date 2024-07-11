import { MessageEntity } from "../entities";

export interface IGetChatByUseCase {
    execute (data: {userId:string}) : Promise <  any >
}
