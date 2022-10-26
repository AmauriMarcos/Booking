import db from "../../config/mysql.js";

const createRoom = (req, res, next) => {
  const {
    room,
    roomType,
    maxPeople,
    includes,
    shortDescription,
    checkIn,
    checkOut,
    hotelName,
    price,
  } = req.body;

  const query = `SELECT id FROM hotels WHERE hotelName="${hotelName}"`;

  db.query(query, (err, result) => {
    if (err) {
      next(err);
    }
    const hotelID = result[0]?.id;

    const q = `INSERT INTO rooms(room, roomType, maxPeople, 
                           includes, shortDescription, checkIn, 
                           checkOut,hotelID, price) 
                VALUES(${room}, "${roomType}", ${maxPeople}, 
                       "${includes}", "${shortDescription}",${checkIn === "" ? null : "checkIn"}, 
                       ${checkOut === "" ? null : "checkOut"}, ${hotelID}, ${price})`;
    db.query(q, (err, result) => {
      if (err) {
        next(err);
      }

      res.send(result);
    });
  });
};

export default createRoom;
