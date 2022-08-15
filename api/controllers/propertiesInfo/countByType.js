import db from '../../config/mysql.js';

const countByType = (req, res, next)=> {
    const q = ` SELECT  propertyType,
                        COUNT(*) AS "numberOfpropertiesType",
                        propertyURL
                FROM properties
                GROUP BY propertyType;`
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }

        res.send(result);
    })
}

export default countByType;