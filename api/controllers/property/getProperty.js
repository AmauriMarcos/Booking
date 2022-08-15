import db from '../../config/mysql.js';

const getProperty = (req, res, next) => {
    try {
        const q = `SELECT * FROM properties`;
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

export default getProperty;