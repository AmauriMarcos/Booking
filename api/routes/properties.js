import express from "express";
import createProperty from '../controllers/property/createProperty.js';
import getPropertyByID from '../controllers/property/getPropertyById.js';
import getProperty from '../controllers/property/getProperty.js';
import updateProperty from '../controllers/property/updateProperty.js';
import deleteProperty from '../controllers/property/deleteProperty.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Get
router.get("/", getProperty);

//Get by ID
router.get("/:id", getPropertyByID);

//Create
router.post("/", verifyAdmin, createProperty);

//Update
router.put("/:id", verifyAdmin, updateProperty);

//Delete
router.delete("/:id", verifyAdmin,  deleteProperty);


export default router;
