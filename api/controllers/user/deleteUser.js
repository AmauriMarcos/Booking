import db from '../../config/mysql.js';

const deleteUser = (req, res, next) => {
    const id = req.params.id;
    try {
        const q = `DELETE FROM users WHERE id=${id}`;
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

export default deleteUser;