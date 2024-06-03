import { blockUnblock } from "../database/mongodb/repositories/blockUnblock";

export const blockUsers = async ( _id : string , status : boolean ) => {
    try {

        await blockUnblock( _id , status )


    } catch ( error : any ) {

        console.error( 'the Error From When the block users kafka', error );
        
        throw new Error(error?.message);
        
    }
}