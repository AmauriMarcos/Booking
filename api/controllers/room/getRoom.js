import db from '../../config/mysql.js';

const getRoom = (req, res, next) => {
    const q = 'SELECT * FROM rooms'
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }

        res.send(result);
    })
}

export default getRoom;