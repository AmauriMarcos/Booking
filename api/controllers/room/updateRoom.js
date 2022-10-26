import db from "../../config/mysql.js";

const updateRoom = (req, res, next) => {
  const roomID = req.params.id;
  const {room,checkIn, checkOut} =  req.body.data;
  const changeFormatDate = (date) => {
   
    let currentDateInMySQLFormat = new Date(date).toISOString();

    let index = currentDateInMySQLFormat.indexOf('T');

    const sqlDateFormat = currentDateInMySQLFormat.slice(0, index);
    return sqlDateFormat;
  }

  const startDate = changeFormatDate(checkIn);
  const endDate = changeFormatDate(checkOut);

  const q = `UPDATE rooms SET checkIn="${startDate}", checkOut="${endDate}"
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
