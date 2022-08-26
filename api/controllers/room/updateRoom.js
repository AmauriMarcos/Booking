import db from "../../config/mysql.js";

const updateRoom = (req, res, next) => {
  console.log(req.params.id);
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

  console.log(room, checkIn, checkOut);

  const q = `UPDATE rooms SET ckeckIn="${checkIn}", checkOut="${checkOut}"
             WHERE room=${room}`;
  db.query(q, (err, result) => {
    if (err) {
      next(err);
    }
    console.log(result)
    res.send(result);
  });
};

export default updateRoom;
