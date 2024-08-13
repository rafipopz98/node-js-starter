import express from 'express'
import { PORT } from './config/config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { UserAPI } from './api/routes/user.js';
import { responseHandler } from './api/middlewares/responseMiddleware.js';


const ExpressApp = (app) => {
    // congiguration can be done here...
    app.use(cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
        credentials: true,
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(responseHandler);

    app.use((req, res, next) => {
        console.log("\n", req.url);
        res.header("Access-Control-Allow-Credentials");
        next();
    });

    app.listen(PORT, () => {
        console.log(`listening at port: ${PORT}`);
    });
}


const start = () => {
    const app = express();
    ExpressApp(app)

    // Routers...
    UserAPI(app)
}

start();