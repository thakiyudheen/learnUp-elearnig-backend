import { blockUnblock } from "../../../infrastructure/database/mongodb/repositories/blockUnblock";

export const blockUnblockConsumer = async (data: { _id: string; isBlocked: boolean }) => {

	try {
        console.log('here reached block consumer')
		await blockUnblock( data )


		

	} catch (error: any) {

		console.log("block-unblock-user-consumer error: ", error?.message);

	}

};