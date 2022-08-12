import db from '../../config/mysql.js';

const deleteRoom = (req, res, next) => {
    const id = req.params.id;
    const q = `DELETE FROM rooms WHERE id=${id}`
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }
        res.send(result);
    })
}

export default deleteRoom;