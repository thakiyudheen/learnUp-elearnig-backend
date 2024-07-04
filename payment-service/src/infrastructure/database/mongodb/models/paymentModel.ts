import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref:'users'
		},
		courseId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		method: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "completed", "failed", "refunded"],
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Payment = model("payments", paymentSchema);