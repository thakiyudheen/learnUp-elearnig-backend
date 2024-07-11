import { User } from "../models";


interface data {
    _id :string ,
    isBlocked :boolean
}

export const blockUnblock = async ( data : data ) : Promise < void > => {

    try {
        
        await User.updateOne( {_id : data._id} , {isBlocked : data.isBlocked} )

        
    } catch ( error : any ) {

        console.log(error.message)

    }
}