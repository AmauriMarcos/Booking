import db from "../../config/mysql.js";

const updateRoom = (req, res, next) => {
  const id = req.params.id;
  const {
    room,
    roomType,
    maxPeople,
    includes,
    shortDescription,
    checkIn,
    checkOut,
    hotelID,
    price,
  } = req.body;
  const q = `UPDATE rooms(room, roomType, maxPeople, 
                          includes, shortDescription, checkIn, 
                          checkOut,hotelID, price) 
             SET room=${room}, roomTypes="${roomType}", maxPeople=${maxPeople}, 
                 includes="${includes}", shortDescription="${shortDescription}", ckeckIn="${checkIn}", 
                 checkOut="${checkOut}", hotelID="${hotelID}, price=${price}
             WHERE id=${id}`;
  db.query(q, (err, result) => {
    if (err) {
      next(err);
    }

    res.send(result);
  });
};

export default updateRoom;
