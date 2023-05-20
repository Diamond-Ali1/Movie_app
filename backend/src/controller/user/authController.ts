import users from '../../model/usersModel';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

const auth = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'username and password are required fields' });
    }

    //checking if user exists
    const user = await users.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'user does not exist' });
    }

    //authenticating password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'incorrect password' });
    }
    const token = jwt.sign({ username }, `${process.env.TOKEN}`);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'The server is down' });
  }
};

export default auth;
