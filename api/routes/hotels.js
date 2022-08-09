import express from "express";
import {createError} from '../utils/error.js';
import createHotel from '../controllers/hotel/createHotel.js';
import getHotelByID from '../controllers/hotel/getHotelById.js';
import getHotel from '../controllers/hotel/getHotel.js';
const router = express.Router();


//Get
router.get("/", getHotel);

//Get by ID
router.get("/:id", getHotelByID);

//Create
router.post("/", createHotel);

//Update
//Delete



export default router;
