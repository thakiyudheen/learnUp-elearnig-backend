import { User } from "../models";


interface data {
    _id :string ,
    isBlocked :boolean
}

export const blockUnblock = async ( data : data ) : Promise < void | null > => {

    try {
        
        await User.updateOne( {_id : data._id} , {isBlocked : data.isBlocked} )

        
    } catch ( error : any ) {

        throw new Error(error?.message);

    }
}