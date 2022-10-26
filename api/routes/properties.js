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


router.get("/", getProperty);

router.get("/all", getAllProperties);


router.get("/search/:search", searchProperty);


router.get("/:id", getPropertyByID);


router.get('/view/:id', getSelectedProperty);


router.post("/", verifyAdmin, createProperty);


router.put("/:id", verifyAdmin, updateProperty);


router.delete("/:id", verifyAdmin,  deleteProperty);


export default router;
