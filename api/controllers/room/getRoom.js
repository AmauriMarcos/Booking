import db from '../../config/mysql.js';

const getRoom = (req, res, next) => {
    const location = req.params.location;
    const q = ` SELECT *, rooms.price, COUNT(rooms.hotelID) AS "roomsQTD" 
                FROM rooms
                INNER JOIN properties ON properties.id = rooms.hotelID
                WHERE propertyType ="${location}" OR location="${location}"
                group by properties.id`;
    
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }

        res.send(result);
    })
}

export default getRoom;