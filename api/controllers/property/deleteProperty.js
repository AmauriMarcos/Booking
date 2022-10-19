import db from "../../config/mysql.js";

const deleteProperty = (req, res, next) => {
  const id = req.params.id;
  console.log(id)

  try {
    const propertyQuery = `DELETE FROM properties WHERE id=${id}`;
    db.query(propertyQuery, (err, data) => {
      if (err) {
        throw err;
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
};

export default deleteProperty;
