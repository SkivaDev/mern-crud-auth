import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';

export const authRequired = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const { id } = jwt.verify(token, TOKEN_SECRET);
    req.userId = id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}