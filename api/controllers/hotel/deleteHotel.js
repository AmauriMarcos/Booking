import db from "../../config/mysql.js";

const deleteHotel = (req, res, next) => {
  const id = req.params.id;

  try {
    const hotelQuery = `DELETE FROM hotels WHERE id=${id}`;
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

export default deleteHotel;
