import express from "express";
import db from "../config/mysql.js";
const router = express.Router();

//Create
router.post("/", (req, res) => {
  const query = `INSERT INTO hotels(hotelName,stars,price,
                        reviewQuantity,reviewRating,city,address,hotelURL
                        customerOpinion,typeOfAccommodation,roomDescription,roomRating,
                        roomCustomerOpinion,freeCancelation,breakfastIncluded,
                        preferredPlusProperty,noPaymentNeeded)
                VALUES("${req.body.hotelName}",${req.body.stars},${req.body.price},
                        ${req.body.reviewQuantity},${req.body.reviewRating},"${req.body.city}","${req.body.address}","${req.body.hotelURL}"
                        ${req.body.customerOpinion},${req.body.typeOfAccommodation},"${req.body.roomDescription}",${req.body.roomRating},
                       "${req.body.roomCustomerOpinion}","${req.body.freeCancelation}""${req.body.breakfastIncluded}",
                       "${req.body.preferredPlusProperty}","${req.body.noPaymentNeeded}")`;
});

//Update
//Delete
//Get
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const q = `SELECT * FROM hotels WHERE id =${id}`;
  db.query(q, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});

//Get all
router.get("/", (req, res) => {
  const q = `SELECT * FROM hotels`;
  db.query(q, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(data);
  });
});
export default router;
