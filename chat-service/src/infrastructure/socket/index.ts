// import { Server as SocketIOServer, Socket } from 'socket.io';

// const socketEventHandler = (socket: Socket, io: SocketIOServer, context: {
//     onlineUsers: Map<string, string>
// }) => {
//     console.log('Socket connected:', socket.id);

//     const { onlineUsers } = context;

//     socket.on('onlineUsers', (user: { userId: string }) => {
//         const entries = Array.from(onlineUsers.entries());
//         const filteredEntries = entries.filter(([socketId, id]) => id !== user.userId || socketId === socket.id);
//         onlineUsers.clear();
//         filteredEntries.forEach(([socketId, id]) => onlineUsers.set(socketId, id));

//         onlineUsers.set(socket.id, user.userId);
//         const userIds = Array.from(new Set(onlineUsers.values()));

//         console.log('Updated online users:', userIds);
//         io.emit('getOnlineUser', userIds);
//     });

//     socket.on('disconnect', () => {
//         console.log('Socket disconnected:', socket.id);
//         onlineUsers.delete(socket.id);

//         const userIds = Array.from(new Set(onlineUsers.values()));
//         console.log('Updated online users on disconnect:', userIds);


//         io.emit('getOnlineUser', userIds);
//     });
// };



// export type socketEventHandlerType = (socket: Socket, io: SocketIOServer, context: {
//     onlineUsers: Map<string, string>
// }) => void;

// export default socketEventHandler;


import { Server as SocketIOServer, Socket } from 'socket.io';

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

    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
        onlineUsers.delete(socket.id);

        const userIds = Array.from(new Set(onlineUsers.values()));
        console.log('Updated online users on disconnect:', userIds);

        io.emit('getOnlineUser', userIds);
    });
};

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer, context: { onlineUsers: Map<string, string> }) => void;
export default socketEventHandler;
