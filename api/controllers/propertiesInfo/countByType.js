import db from '../../config/mysql.js';

const countByType = (req, res, next)=> {
    const q = ` SELECT  id,
                        propertyType,
                        COUNT(*) AS "numberOfpropertiesType",
                        propertyURL
                FROM properties
                GROUP BY propertyType;`
    db.query(q, (err, result) => {
        if(err){
            next(err);
        }

        if(result){
            res.send(result);
        }else{
            res.send("Something went wrong on CountByCity")
        }
    })
}

export default countByType;