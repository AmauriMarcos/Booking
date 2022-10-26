import express from 'express';
import countByCity from "../controllers/propertiesInfo/countByCity.js";
import countByType from "../controllers/propertiesInfo/countByType.js";
const router = express.Router();


router.get('/countByCity', countByCity);

router.get('/countByType', countByType);


export default router;