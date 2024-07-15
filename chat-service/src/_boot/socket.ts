import socketEventHandler from '../infrastructure/socket';
import { Server } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io'

export default async (server: Server,) => {

    const onlineUsers = new Map();
    const io: SocketIOServer = new SocketIOServer(server, {
        cors: {
            origin: process.env.FRONTEND_URL,
            methods: ["GET", "POST"],
            credentials: true

        }})
    io.on("connection", (socket: Socket) => {

        console.log('socket io connected');
       
        socketEventHandler(socket, io, { onlineUsers })


        socket.on("disconnect", () => {

            console.log('🚀 Removed user');
        })
    });

}