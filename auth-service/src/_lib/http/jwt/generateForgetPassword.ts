import jwt from "jsonwebtoken" ;

export const generateForgetPassword = async ( payload :{ email :string }) => {
    try {
        const secret = process.env.FORGOT_PASSWORD_SECRET;

        if (!secret) {
            throw new Error("FORGOT_PASSWORD_SECRET environment variable is not set");
        }

        const token = jwt.sign( payload , secret ,{
            expiresIn: "15m",
        })

        return token ;


    } catch ( error : any ) {
        
        console.error("Error generating forgot password token:", error);

		throw new Error("Failed to generate forgot password token");
    }
}