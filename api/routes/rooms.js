import express from 'express';
import getRoom from '../controllers/room/getRoom.js';
import getRoomById from '../controllers/room/getRoomById.js';
import createRoom from '../controllers/room/createRoom.js';
import getAllRooms from '../controllers/room/getAllRooms.js';
import updateRoom from '../controllers/room/updateRoom.js';
import deleteRoom from '../controllers/room/deleteRoom.js';
import { verifyAdmin, verifyUser } from './../utils/verifyToken.js';
const router = express.Router();


    router.post("/", createRoom);

    router.get("/", getAllRooms);

    router.get("/list/:location", getRoom);

    router.get("/:id",  getRoomById);

    router.put("/:id",  updateRoom);

    router.delete("/:id", deleteRoom);


export default router;