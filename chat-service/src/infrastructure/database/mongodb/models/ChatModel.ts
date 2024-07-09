import { ChatEntity } from "../../../../domain/entities";
import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    type: {
        type: String,
        enum: ['individual', 'group'],
        default: 'individual'
    },
    status: {
        type: String,
        enum:['requested', 'active', 'block'],
        default: 'requested'
    },
    lastSeen: {
        type: Date,
    },
    groupName: {
        type: String
    },
    groupDescription: {
        type: String
    },
    subscriptionType: {
        type: String,
        default:'none'
    }
}, {
    timestamps: true
});

export const Chat = model<ChatEntity>("chats", chatSchema);