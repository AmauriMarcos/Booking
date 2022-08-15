import db from "../../config/mysql.js";
const createProperty = (req, res, next) => {
  const {
    propertyName,
    propertyType,
    stars,
    price,
    reviewQuantity,
    reviewRating,
    location,
    address,
    propertyURL,
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
  const q = `INSERT INTO properties(propertyName, propertyType, stars,price,
                            reviewQuantity,reviewRating,location,address,propertyURL,
                            customerOpinion,typeOfAccommodation,roomDescription,roomRating,
                            roomCustomerOpinion,freeCancelation,breakfastIncluded,
                            preferredPlusProperty,noPaymentNeeded)
                    VALUES("${propertyName}", "${propertyType}",${stars},${price},
                            ${reviewQuantity},${reviewRating},"${location}","${address}","${propertyURL}",
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

export default createProperty;