import db from '../../config/mysql.js';

const getHotel = (req, res, next) => {
    try {
        const q = `SELECT * FROM hotels`;
        db.query(q, (err, data) => {
          if (err) {
            throw err;
          }
          res.send(data);
        });
      } catch (err) {
        next(err);
      }
}

export default getHotel;