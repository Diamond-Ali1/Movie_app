import users from '../../model/usersModel';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'username and password and required fields' });
    }
    
    //checking for duplicates
    const duplicate = await users.findOne({username});
    if (duplicate) {
      return res.status(409).json({message: 'user with user name already exists'})
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = await jwt.sign({ username }, `${process.env.TOKEN}`);
    const newUser = await users.create({ username, password: hashedPassword });
    res.status(201).json({token});
  } catch (err) {
    res.status(500).json({ error: 'The server is down' });
  }
};

export default signUp;