import db from '../../config/mysql.js';

const getUserById = (req, res, next) => {
    const id = req.params.id;
    try {
        const q = `SELECT id, username, email, isAdmin, avatar, created_at FROM users WHERE id=${id}`;
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

export default getUserById;