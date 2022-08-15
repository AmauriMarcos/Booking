import db from '../../config/mysql.js';

const countByCity = (req, res, next)=> {
    const q = ` SELECT location,
                       COUNT(*) AS "numberOfProperties"
                FROM properties
                GROUP BY location;`
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }

        res.send(result);
    })
}

export default countByCity;