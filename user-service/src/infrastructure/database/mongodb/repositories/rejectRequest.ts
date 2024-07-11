import { User } from "../models";


interface data {
    email :string ,
    isVerified :boolean
}

export const rejectRequest = async ( data : data ) : Promise < void > => {

    try {
        
        await User.updateOne( {email : data.email} , {isReject : true  } )

        
    } catch ( error : any ) {

        console.log(error.message)

    }
}