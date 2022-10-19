import db from '../../config/mysql.js';

const getSelectedProperty = (req, res, next) => {
    const id = req.params.id;
    
      try {
        const q = `SELECT * FROM properties WHERE id=${id}`;
        db.query(q, (err, data) => {
          if (err) {
            throw err        
          }

          res.send(data);
        });

        
      } catch (err) {
        next(err);
      }
}

export default getSelectedProperty;