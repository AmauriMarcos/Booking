import db from "../../config/mysql.js";

const updateProperty = (req, res, next) => {
  const id = req.params.id;
  const {
    propertyName,
    stars,
    price,
    reviewQuantity,
    reviewRating,
    city,
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
  try {
    const propertyQuery = `UPDATE properties SET propertyName="${propertyName}",
                                          stars=${stars} ,
                                          price=${price} ,
                                          reviewQuantity=${reviewQuantity},
                                          reviewRating=${reviewRating},
                                          city="${city}",
                                          address="${address}",
                                          propertyURL="${propertyURL}",
                                          customerOpinion="${customerOpinion}",
                                          typeOfAccommodation="${typeOfAccommodation}",
                                          roomDescription="${roomDescription}",
                                          roomRating=${roomRating},
                                          roomCustomerOpinion="${roomCustomerOpinion}",
                                          freeCancelation=${freeCancelation},
                                          breakfastIncluded=${breakfastIncluded},
                                          preferredPlusProperty=${preferredPlusProperty},
                                          noPaymentNeeded=${noPaymentNeeded} 
                        WHERE id=${id}`;
    db.query(propertyQuery, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
};

export default updateProperty;
