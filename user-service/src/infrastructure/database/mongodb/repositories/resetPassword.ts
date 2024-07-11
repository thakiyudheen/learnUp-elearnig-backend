import { User } from "../models";




export const resetPassword = async ( data: {email : string , password : string} ) : Promise < void > => {

    try {

        await User.updateOne( { email : data.email } , { $set :{password : data.password}} )

    } catch ( error : any ) {

        throw new Error(error?.message);

    }
}