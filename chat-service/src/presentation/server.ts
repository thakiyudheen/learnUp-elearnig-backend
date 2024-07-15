import express, { Request, Response, Application, NextFunction, ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import { routes } from '../infrastructure/routes';
import { Dependencies } from '../_boot/dependecies';
import http, { createServer } from 'http';
import socket from '../_boot/socket';
import  cors  from 'cors';


config()
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3007;

// using middlewares ----------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));


// cors setup ------------------------------------------
const corsOptions = {
    origin: 'https://learn-up-elearning-frontend-git-main-thakiyudheens-projects.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));

// route setup -----------------------------------------

app.get('/api/chat/test', (req: Request, res: Response) => {
    res.status(200).json({
        message: "chat service ON!"
    });
});

const Server = createServer(app)
console.log('this is calling');

socket(Server)
console.log('this is calling');


app.use('/api/chat',routes( Dependencies ))

//  not fount Error --------------------------------------

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "API Not found -->" });
});




// start server -------------------------------------------

const start = () => {
    Server.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    });
}


export default {start}