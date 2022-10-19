import express from "express";
import createProperty from '../controllers/property/createProperty.js';
import getPropertyByID from '../controllers/property/getPropertyById.js';
import searchProperty  from '../controllers/property/searchProperty.js';
import getProperty from '../controllers/property/getProperty.js';
import getAllProperties from '../controllers/property/getAllProperties.js';
import getSelectedProperty from '../controllers/property/getSelectedProperty.js';
import updateProperty from '../controllers/property/updateProperty.js';
import deleteProperty from '../controllers/property/deleteProperty.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Get
router.get("/", getProperty);

//Get all properties
router.get("/all", getAllProperties);

//Get by location
router.get("/search/:search", searchProperty);

//Get by ID
router.get("/:id", getPropertyByID);

//Get specific property by id
router.get('/view/:id', getSelectedProperty);

//Create
router.post("/", verifyAdmin, createProperty);

//Update
router.put("/:id", verifyAdmin, updateProperty);

//Delete
router.delete("/:id", verifyAdmin,  deleteProperty);


export default router;
