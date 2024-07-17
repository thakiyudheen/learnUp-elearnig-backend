import express, { Request, Response, Application, NextFunction, ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import { routes } from '../infrastructure/routes';
import { Dependencies } from '../_boot/dependecies';
import errorHandler from '../_lib/common/error/errorhandler';
import cors from 'cors'




config()
const app : Application = express();
const PORT : number = Number(process.env.PORT) || 3001;



// using middlewares ----------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// // cors setup ------------------------------------------
// const corsOptions = {
//     origin: 'https://learn-up-elearning-frontend.vercel.app',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//     allowedHeaders: ['DNT', 'User-Agent', 'X-Requested-With', 'If-Modified-Since', 'Cache-Control', 'Content-Type', 'Range'],
//     credentials: true,
//     exposedHeaders: ['Content-Length', 'Content-Range']
//   };

// cors setup ------------------------------------------
const corsOptions = {
    origin: ['https://learn-up-elearning-frontend.vercel.app','http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
// route setup -----------------------------------------

app.get('/api/auth/test', (req: Request, res: Response,next) => {
    res.status(200).json({
        message: "Auth service ON!"
    });
});


// app.use('/', routes( Dependencies ))
app.use('/api/auth', routes( Dependencies ))

//  not fount Error --------------------------------------

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "API Not found" });
});


app.use( errorHandler )  

// start server -------------------------------------------

const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT}`);
    });
}


export default { start }