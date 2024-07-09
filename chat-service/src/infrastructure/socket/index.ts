import { Server as SocketIOServer, Socket } from 'socket.io';
import { Chat } from '../database/mongodb/models';
import { seenMessages } from '../database/mongodb/repositories/seenMessages';
import { createMessage } from '../database/mongodb/repositories';

const socketEventHandler = (socket: Socket, io: SocketIOServer, context: { onlineUsers: Map<string, string> }) => {
    console.log('Socket connected:', socket.id);

    const { onlineUsers } = context;

    socket.on('onlineUsers', (user: { userId: string }) => {
        const entries = Array.from(onlineUsers.entries());
        const filteredEntries = entries.filter(([socketId, id]) => id !== user.userId || socketId === socket.id);
        onlineUsers.clear();
        filteredEntries.forEach(([socketId, id]) => onlineUsers.set(socketId, id));

        onlineUsers.set(socket.id, user.userId);
        const userIds = Array.from(new Set(onlineUsers.values()));

        console.log('Updated online users:', userIds);

        io.emit('getOnlineUser', userIds);
    });

    // join room  -----------------------------
    socket.on("join-room", (roomId: string) => {
        console.log('room creaated successfully')
        socket.join(roomId);
    });

    // send and recieve message ------------------------
    socket.on("send-message", async (message: any) => {
        const messages =await  createMessage(message)
        console.log('message received succesfully', messages)
        io.to(message.roomId).emit("receive-message", {
            ...message,
            createdAt: new Date().toISOString(),
        });
    });

    // disconnect soccket ---------------------------------------
    socket.on('disconnect', async () => {
        console.log('Socket disconnected:', socket.id);
        const userId = onlineUsers.get(socket.id);
        onlineUsers.delete(socket.id);


        const userIds = Array.from(new Set(onlineUsers.values()));
        console.log('Updated online users on disconnect:', userIds);

        // setup last seen
        const updateLastSeen = await Chat.updateMany(
            {
                participants: userId
            }
            , {
                $set: {
                    lastSeen: new Date()

                }
            }
        )

        io.emit('getOnlineUser', userIds);
    });

    // is typing ----------------------------------
    socket?.on("isTyping", (data: any) => {
        io.to(data.roomId).emit("isTyping", { ...data })
    })

    // stop typing ----------------------------------
    socket?.on("stopTyping", (data: any) => {
        console.log('stop has working', data)
        io.to(data.roomId).emit("stopTyping", { ...data })
    })

    // seen message ---------------------------------
    socket?.on("seen-message", async (data: any) => {
        console.log('seen message working', data)
        await seenMessages(data)
    })



    // socket using for connect peer js ---------------
    socket.on('connectPeers',(data : any)=>{
        console.log('this is is the id form there',data)
    })

};

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer, context: { onlineUsers: Map<string, string> }) => void;
export default socketEventHandler;
