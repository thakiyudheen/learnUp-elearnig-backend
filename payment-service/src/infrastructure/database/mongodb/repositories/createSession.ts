import { SessionEntity } from "@/domain/entities";
import { Session } from "../models";




export const createSession = async  ( data : SessionEntity  ) : Promise < SessionEntity > => {
    try {
 
        const session = await Session.create( { ...data } ) ;

        if( !session  ) {

            throw new Error('Payment session Creation Failed ')
        }

        return session

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}