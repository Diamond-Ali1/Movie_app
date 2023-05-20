import { Router } from 'express';
import signUp from '../controller/user/signUpController';
export const signUpRouter = Router();

signUpRouter.post('/', signUp);