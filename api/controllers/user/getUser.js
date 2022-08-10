import db from '../../config/mysql.js';

const getUser = (req, res, next) => {
    try {
        const q = `SELECT * FROM users`;
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

export default getUser;