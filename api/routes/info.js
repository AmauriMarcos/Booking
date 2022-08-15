import express from 'express';
import countByCity from "../controllers/propertiesInfo/countByCity.js";
import countByType from "../controllers/propertiesInfo/countByType.js";
const router = express.Router();

//GET NUMBER OF PROPERTIES FOR EACH CITY
router.get('/countByCity', countByCity);


//GET NUMBER OF PROPERTIES TYPE
router.get('/countByType', countByType);


export default router;