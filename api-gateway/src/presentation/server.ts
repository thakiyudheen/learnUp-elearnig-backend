import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import proxy from 'express-http-proxy';

config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 3000;

// CORS setup ---------------------------------

// const corsOptions: cors.CorsOptions = {
//     origin: "http://localhost:5173", 
//     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//     credentials: true,
// };

// cors setup ------------------------------------------
const corsOptions = {
    origin: ['https://learn-up-elearning-frontend.vercel.app','http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

// Base route ---------------------------------

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "API service ON!",
    });
});

// Proxy routes --------------------------------

const routes = [
    {
        context: "/api/auth/",
        target: process.env.API_AUTH_TARGET,
        changeOrigin: true,
    },
    {
        context: "/api/notification",
        target: process.env.API_NOTIFICATION_TARGET,
        changeOrigin: true,
    },
    {
        context: "/api/user/",
        target: process.env.API_USER_TARGET,
        changeOrigin: true,
    },
    {
        context: "/api/course",
        target: process.env.API_COURSE_TARGET,
        changeOrigin: true,
    },
    {
        context: "/api/payment",
        target: process.env.API_PAYMENT_TARGET,
        changeOrigin: true,
    },
    {
        context: "/api/chat",
        target: process.env.API_CHAT_TARGET,
        changeOrigin: true,
    }
];


// Start server --------------------------------

const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT} thakiyu`);
    });
}


export default { start };
