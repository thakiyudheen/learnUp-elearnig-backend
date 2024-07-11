import { CategoryEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    categoryName : {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const Category = model<CategoryEntity>("categories", categorySchema);