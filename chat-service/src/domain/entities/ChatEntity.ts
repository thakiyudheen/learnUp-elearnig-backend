import { Types } from "mongoose";

export interface ChatEntity {
    _id?: string | Types.ObjectId;
    participants: Types.ObjectId[] | string[];
    type?: 'individual' | 'group';
    status?: 'requested' | 'active' | 'block';
    lastSeen?:Date;
    groupName?: string | null;
    groupDescription?: string | null;
    subscriptionType ?:string 
    createdAt?: Date | string;
    updatedAt?: Date | string;
}