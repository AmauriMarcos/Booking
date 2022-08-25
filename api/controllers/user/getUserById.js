import db from '../../config/mysql.js';

const getUserById = (req, res, next) => {
    const id = req.params.id;
    if(id !== 'undefined'){
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
    }else{
      res.send('ID is undefined')
    }
   
}

export default getUserById;