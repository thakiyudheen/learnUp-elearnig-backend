import { User } from "../../models";



export const verifyRequest = async  ( data : { email : string , isVerified : boolean} ) : Promise < void > => {

    try {
       
        const updated = await User.updateOne( { email : data.email } , { isVerified : data.isVerified }) ;

        if( !updated ) {

            throw new Error('Request verify error in auth-service ');
            
        }

        

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}