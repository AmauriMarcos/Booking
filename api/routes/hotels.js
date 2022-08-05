import express from "express";
import db from "../config/mysql.js";
const router = express.Router();

//Create
router.post("/", (req, res) => {
  const {
    hotelName,
    stars,
    price,
    reviewQuantity,
    reviewRating,
    city,
    address,
    hotelURL,
    customerOpinion,
    typeOfAccommodation,
    roomDescription,
    roomRating,
    roomCustomerOpinion,
    freeCancelation,
    breakfastIncluded,
    preferredPlusProperty,
    noPaymentNeeded,
  } = req.body;
  const q = `INSERT INTO hotels(hotelName,stars,price,
                        reviewQuantity,reviewRating,city,address,hotelURL,
                        customerOpinion,typeOfAccommodation,roomDescription,roomRating,
                        roomCustomerOpinion,freeCancelation,breakfastIncluded,
                        preferredPlusProperty,noPaymentNeeded)
                VALUES("${hotelName}",${stars},${price},
                        ${reviewQuantity},${reviewRating},"${city}","${address}","${hotelURL}",
                        "${customerOpinion}","${typeOfAccommodation}","${roomDescription}",${roomRating},
                       "${roomCustomerOpinion}",${freeCancelation},${breakfastIncluded},
                       ${preferredPlusProperty},${noPaymentNeeded});`;

  db.query(q, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

//Update
//Delete
//Get
router.get("/:id", (req, res) => {
  let arrayGallery = [];
  const id = req.params.id;
  const galleryQuery = ` SELECT imageURL FROM gallery
                         WHERE hotelID=${id};`
   db.query(galleryQuery, (err, data) => {
    if (err) {
      throw err;
    }
    return arrayGallery.push(data)
  });


  const hotelQuery = `SELECT * FROM hotels WHERE id=${id}`
   db.query(hotelQuery, (err, data) => {
    if (err) {
      throw err;
    }

    let myJoinTableData = {
      hotel: data,
      gallery: arrayGallery
    }

    res.send(myJoinTableData);
  })

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
