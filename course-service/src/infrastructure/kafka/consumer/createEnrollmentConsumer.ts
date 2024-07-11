import { createEnrollment } from "../../../infrastructure/database/mongodb/repositories";


export const createEnrollmentConsumer = async (data: any ) => {

	try {
        
        console.log('here reached create enrollment consumer', data)

		await createEnrollment( data )

	} catch (error: any) {

		console.log("create enrollment consumer error: ", error?.message);

	}

};