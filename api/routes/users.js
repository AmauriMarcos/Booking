import express from 'express';
import getUser from '../controllers/user/getUser.js';
import getUserById from '../controllers/user/getUserById.js';
import getSelectedUser from '../controllers/user/getSelectedUser.js';
import editUser from '../controllers/user/editUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import { verifyToken, verifyUser, verifyAdmin } from './../utils/verifyToken.js';

const router = express.Router();

router.get('/', getUser);

router.get('/:id', verifyAdmin, getUserById);

router.get('/view/:id', getSelectedUser);

router.put('/:id', verifyUser, editUser);

router.delete('/:id', deleteUser);

export default router;