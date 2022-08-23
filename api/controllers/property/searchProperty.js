import db from '../../config/mysql.js';

const searchProperty = (req, res, next) => {
    const search = req.params.search;
      try {
        const q = `SELECT * FROM properties WHERE location="${search}" OR propertyType="${search}"`;
        db.query(q, (err, data) => {
          if (err) {
            throw err;
          }
          console.log(data);
          res.send(data);
        });
      } catch (err) {
        next(err);
      } 
}

export default searchProperty;