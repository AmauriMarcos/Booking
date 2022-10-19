import db from '../../config/mysql.js';

const countByCity = (req, res, next)=> {
    const q = `SELECT  location,
                       propertyURL,
                       COUNT(*) AS "numberOfProperties"
                FROM properties
                GROUP BY location;`
    db.query(q, (error, result) => {
        if(error){
            next(error.response);
        }
        
        if(result){
            res.send(result);
        }else{
            res.send("Something went wrong on CountByCity")
        }
        
    })
}

export default countByCity;