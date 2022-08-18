import db from '../../config/mysql.js';

const getProperty = (req, res, next) => {
    console.log(req.body);
    try {
        const q = `SELECT * FROM properties WHERE location="New York"`;
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