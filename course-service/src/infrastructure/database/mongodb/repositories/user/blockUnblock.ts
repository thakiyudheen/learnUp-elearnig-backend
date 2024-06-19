import { User } from "../../models";



export const blockUnblock = async  ( data : {_id : string , isBlocked : boolean} ) : Promise < void > => {

    try {
       
        const updated = await User.updateOne( { _id : data._id} , { isBlocked : data.isBlocked }) ;

        if( !updated ) {

            throw new Error('User Blocking error in auth-service ');
            
        }

        

    } catch ( error : any ){

    
        throw new Error(error?.message);

    }
}