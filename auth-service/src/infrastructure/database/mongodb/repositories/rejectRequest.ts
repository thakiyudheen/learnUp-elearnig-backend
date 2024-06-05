import { User } from "../models";


export const rejectRequest = async  ( data : { email : string , isVerified : boolean} ) : Promise < void > => {

    try {
       
        const updated = await User.updateOne( { email : data.email } , { isRejected : true }) ;

        if( !updated ) {

            throw new Error('Reject Request error in auth-service ');
            
        }

        

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}