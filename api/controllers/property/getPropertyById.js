import db from '../../config/mysql.js';

const getPropertyByID = (req, res, next) => {
  let arrayGallery = [];
  const id = req.params.id;
  const galleryQuery = ` SELECT imageURL FROM gallery
                         WHERE hotelID=${id};`;
  
    try{
        db.query(galleryQuery, (err, data) => {
            if (err) {
              throw err;
            }
            return arrayGallery.push(data);
          });
        
          const propertyQuery = `SELECT * FROM properties WHERE id=${id}`;
          db.query(propertyQuery, (err, data) => {
            if (err) {
              throw err;
            }
        
            let myJoinTableData = {
              hotel: data,
              gallery: arrayGallery,
            };
        
            res.send(myJoinTableData);
          });
    }catch(err){
        next(err);
    }
}

export default getPropertyByID;