import jwt from "jsonwebtoken";

export const generateAccessToken = (
    payload: {
        _id: string,
        email: string,
        role: string
    }
) => {
    console.log('access token working')
    const { _id, email, role } = payload;
    const newPayload = { _id, email, role };

    return jwt.sign(
        newPayload,
        String(process.env.ACCESS_TOKEN_SECRET),
        { expiresIn: '1m' }
    );
};