import { Router } from 'express';
import auth from '../controller/user/authController'
export const authRouter = Router();

authRouter.post('/', auth);