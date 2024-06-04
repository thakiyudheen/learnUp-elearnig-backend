import { User } from "../models";


interface data {
    email :string ,
    isVerified :boolean
}

export const verifyRequest = async ( data : data ) : Promise < void > => {

    try {
        
        await User.updateOne( {email : data.email} , {isVerified : data.isVerified} )

        
    } catch ( error : any ) {

        console.log(error.message)

    }
}