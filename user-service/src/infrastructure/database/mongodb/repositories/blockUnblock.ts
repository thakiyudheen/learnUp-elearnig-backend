import { User } from "../models";


interface data {
    _id :string ,
    isBlocked :boolean
}

export const blockUnblock = async ( data : data ) : Promise < boolean | null > => {

    try {
        const updated  = await User.updateOne( {_id : data._id} , {isBlocked : data.isBlocked} )

        if (!updated) {

            return false

        }

        return true

    } catch ( error : any ) {

        throw new Error(error?.message);

    }
}