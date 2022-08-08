import db from "../../config/mysql";
const createHotel = (req, res, next) => {
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
  try {
    db.query(q, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
};

export default createHotel;