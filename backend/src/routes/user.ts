import { Router } from 'express';
import Users from '../controller/user/getUsers';
export const userRouter = Router();

userRouter.get('/', Users);
