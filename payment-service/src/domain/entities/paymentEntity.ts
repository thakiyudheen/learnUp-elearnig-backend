import { Types } from "mongoose";

export interface PaymentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    courseId?: Types.ObjectId| null | undefined;
    method: string;
    status: string;
    amount: number ;
    subscriptionType?:string | null | undefined;
}