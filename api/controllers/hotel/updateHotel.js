import db from "../../config/mysql.js";

const updateHotel = (req, res, next) => {
  const id = req.params.id;
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
  try {
    const hotelQuery = `UPDATE hotels SET hotelName="${hotelName}",
                                          stars=${stars} ,
                                          price=${price} ,
                                          reviewQuantity=${reviewQuantity},
                                          reviewRating=${reviewRating},
                                          city="${city}",
                                          address="${address}",
                                          hotelURL="${hotelURL}",
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
    db.query(hotelQuery, (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
};

export default updateHotel;
