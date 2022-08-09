import express from 'express';
import register from '../controllers/auth/register.js';
import login from '../controllers/auth/login.js';
const router = express.Router();


//Register a new user
router.post('/register', register);

//Login user
router.post('/login',  login);

export default router;