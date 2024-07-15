
import { IDependecies } from "../../application/Interfases/IDependencies";
import { Request, Response, NextFunction } from "express";

export const logoutController = (dependancies: IDependecies) => {

	return async (req: Request, res: Response, next: NextFunction) => {

		try {

			res.cookie("access_token", "", {
				maxAge: 1, 
				httpOnly: true,
				sameSite: "none",
				secure: true,
			});

			res.cookie("refresh_token", "", {
				maxAge: 1, 
				httpOnly: true,
				sameSite: "none",
				secure: true,
			});

			console.log('logout successfull')

			res.status(204).json({});

		} catch (error: any) {

			next(error);

		}
	};
};