import User from '../models/user.model.js';

export const register = async (req, res) => { 
 
  const { username, email, password } = req.body;

  
  try {
    const newUser = new User({ username, email, password })
 
    const userSaved = await newUser.save();

    res.status(201).json(userSaved);
  } catch (error) {
    console.log(error)    
  }

  res.send('Registrando') 
};
export const login = (req, res) => { res.send('login') };