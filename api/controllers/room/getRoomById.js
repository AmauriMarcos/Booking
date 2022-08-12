import db from '../../config/mysql.js';

const getRoomById = (req, res, next) => {
    const id = req.params.id;
    const q = `SELECT * FROM rooms WHERE id=${id}`
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }
        res.send(result);
    });
}

export default getRoomById;