import express, { response } from 'express';
import * as dotevn from 'dotenv';
dotevn.config();
import { Request, Response } from 'express';
import connectToDB from './config/connectToDB';
import { signUpRouter } from './routes/signUp';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/user';
import { movieRouter } from './routes/movieRoutes';
import axios from 'axios';

const app = express();

connectToDB((err: object): void => {
  if (!err) {
    app.listen(3001, () => {
      console.log(`listening to port ${process.env.PORT}`);
    });
    return;
  }
  console.log(err);
});

app.use(express.json());
app.use('/signup', signUpRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/', movieRouter);
