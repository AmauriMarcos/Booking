import express from 'express';
import getUser from '../controllers/user/getUser.js';
import getUserById from '../controllers/user/getUserById.js';
import editUser from '../controllers/user/editUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import { verifyToken, verifyUser, verifyAdmin } from './../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send('Hello user, you are authenticated')
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send('Hello user, you are authorized! You can delete your account')
});

router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send('You are logged as admin. You can delete all accounts')
});

//Get 
router.get('/', getUser);

//Get by Id
router.get('/:id', getUserById);

//Edit
router.put('/:id', editUser);

//Delete
router.delete('/:id', deleteUser);

export default router;