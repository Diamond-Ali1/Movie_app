import users from '../../model/usersModel';
import { Request, Response } from 'express';

const Users = async (req: Request, res: Response) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default Users;
