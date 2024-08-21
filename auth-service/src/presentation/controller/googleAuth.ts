import { Dependencies } from "../../_boot/dependecies";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { generateRandomString } from "../../_lib/utils";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
export const googleAuth = (Dependencies: IDependecies) => {

    const { useCases: { findUserByEmail } } = Dependencies

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('here reached------------------------------')
            const { credential } = req.body

            const ticket = await client.verifyIdToken({

                idToken: credential,
                audience: process.env.GOOGLE_CLIENT_ID,

            });

            const payload = ticket.getPayload()
            console.log('this is user data', payload)

            if (!payload || !payload.email) {
                return res.status(200).json({
                    success: false,
                    message: 'Google token is invalid or does not contain an email address.'
                })
            }

            const { email, given_name } = payload;
            

            const user = await findUserByEmail(Dependencies).execute(email)

            if (user && !user.isBlocked) {

                const accessToken = generateAccessToken({
                    _id: String(user._id),
                    email: user.email,
                    role: user.role
                })

                const refreshToken = generateRefreshToken({
                    _id: String(user._id),
                    email: user.email,
                    role: user.role
                })

                res.cookie('access_token', accessToken, {
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                })

                res.cookie('refresh_token', refreshToken, {
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                })


                return res.status(200).json({

                    success: true,
                    existingUser: true,
                    data: user,
                    message: " Google login successfully ! ",

                })
            } else {
                
                const signupData = {
                    email: email,
                    password: `${generateRandomString()}`,
                    username: `__${given_name}`
                }

                return res.status(200).json({

                    success: true,
                    existingUser: false,
                    data: signupData,
                    message: "User Google login!",

                });

            }

        } catch (error: any) {

            console.log('error from findUserByEmail controller', error)
            next(error)
        }
    }
}