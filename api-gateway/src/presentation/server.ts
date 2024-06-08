import express, { Request, Response, NextFunction, Application } from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import proxy from 'express-http-proxy';

config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 3000;

// CORS setup ---------------------------------

const corsOptions: cors.CorsOptions = {
    origin: "http://localhost:5173", 
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
};


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
        context: "/api/auth",
        target: "http://localhost:3001",
        changeOrigin: true,
    },
    {
        context: "/api/notification",
        target: "http://localhost:3002",
        changeOrigin: true,
    },
    {
        context: "/api/user",
        target: "http://localhost:3003",
        changeOrigin: true,
    },
    {
        context: "/api/course",
        target: "http://localhost:3004",
        changeOrigin: true,
    }
];

routes.forEach((route) => {
    app.use(route.context, proxy(route.target));
});

// Start server --------------------------------

const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT} thakiyu`);
    });
}


export default { start };
