import express from "express";
import db from "../config/mysql.js";
import {createError} from '../utils/error.js';
import createHotel from '../controllers/hotel/createHotel';
import getHotelByID from '../controllers/hotel/getHotelById';
const router = express.Router();


//Create
router.post("/", createHotel);

//Update
//Delete

//Get by ID
router.get("/:id", getHotelByID);

//Get all
router.get("/", (req, res, next) => {
 
  try {
    const q = `SELECT * FROM hotels`;
    db.query(q, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
export default router;
