import express from "express";
import createHotel from '../controllers/hotel/createHotel.js';
import getHotelByID from '../controllers/hotel/getHotelById.js';
import getHotel from '../controllers/hotel/getHotel.js';
import updateHotel from '../controllers/hotel/updateHotel.js';
import deleteHotel from '../controllers/hotel/deleteHotel.js';
import { verifyAdmin } from './../utils/verifyToken.js';

const router = express.Router();

//Get
router.get("/", getHotel);

//Get by ID
router.get("/:id", getHotelByID);

//Create
router.post("/", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin,  deleteHotel);


export default router;
