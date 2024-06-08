import { Types } from "mongoose";

export interface CategoryEntity {
    _id: Types.ObjectId;
    categoryName: string;
    isBlocked: boolean;
}