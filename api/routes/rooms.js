import express from 'express';
import getRoom from '../controllers/room/getRoom.js';
import getRoomById from '../controllers/room/getRoomById.js';
import createRoom from '../controllers/room/createRoom.js';
import updateRoom from '../controllers/room/updateRoom.js';
import deleteRoom from '../controllers/room/deleteRoom.js';
import { verifyAdmin, verifyUser } from './../utils/verifyToken.js';
const router = express.Router();


//CREATE
    router.post("/", verifyAdmin, createRoom);

//GET
    router.get("/list/:location", getRoom);

//GET BY ID
    router.get("/:id",  getRoomById);

//UPDATE
    router.put("/:id",  updateRoom);

//DELETE
    router.delete("/:id", verifyAdmin,deleteRoom);


export default router;