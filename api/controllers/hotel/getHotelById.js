import db from '../../config/mysql';

const getHotelByID = (req, res, next) => {
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
        
          const hotelQuery = `SELECT * FROM hotels WHERE id=${id}`;
          db.query(hotelQuery, (err, data) => {
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

export default getHotelByID;