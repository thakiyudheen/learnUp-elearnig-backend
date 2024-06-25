import { Server as SocketIOServer, Socket } from 'socket.io';

const socketEventHandler = (socket: Socket, io: SocketIOServer, context: {
    onlineUsers:  Map<string, string>
})=>{
    console.log('this is socket ')
    const onlineUsers=context.onlineUsers;
   
     console.log(onlineUsers)
    socket.on('onlineUsers',(userId : {userId:string})=>{
        onlineUsers.set(socket?.id ,userId.userId)
        
        const onlineUsersArray = Array.from(onlineUsers, ([socketId, userId]) => ({ socketId, userId }));
        io.emit('getOnlineUser', onlineUsersArray);

    })
}

export type socketEventHandlerType = (socket: Socket, io: SocketIOServer, context: {
    onlineUsers: Map<string, string>
}) => void;
export default socketEventHandler;