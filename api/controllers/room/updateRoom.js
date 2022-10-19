import db from "../../config/mysql.js";

const updateRoom = (req, res, next) => {
  const roomID = req.params.id;
  const {room,checkIn, checkOut} =  req.body.data;
  const changeFormatDate = (date) => {
    //Change the format date to fit mysql date function format
    let currentDateInMySQLFormat = new Date(date).toISOString();

    //Before slicing it and getting only the date itself I need to find the index
    //of letter T because we always have that letter after the date. So
    //I want to cut my array from letter T to the end, getting just 
    //the following format 'YYYYMMDD' in the end
    let index = currentDateInMySQLFormat.indexOf('T');

    //Getting '2022-08-16' back. Now it can be used in my database. 
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
