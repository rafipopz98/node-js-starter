import express from 'express'
import { UserController } from '../controllers/usercontroller.js';

const router = express.Router();

const UserRouter = router;
export const UserAPI = (app) => {
    const UC = new UserController();
    UserRouter.get("/hi", UC.hi)

    app.use('/user', UserRouter)
}