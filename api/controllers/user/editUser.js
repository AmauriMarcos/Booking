import db from '../../config/mysql.js';

const editUser = (req, res, next) => {
    const id = req.params.id;
    const {username, isAdmin} = req.body
    try {
        const q = ` UPDATE users SET username="${username}", 
                                         isAdmin=${isAdmin} 
                    WHERE id = ${id}`;
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

export default editUser;