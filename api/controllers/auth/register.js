import db from '../../config/mysql.js';
import bcrypt from 'bcryptjs';

const register = (req, res, next) => {
    const {username, email, password, isAdmin, avatar} = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    try{
        const q =  `INSERT INTO users(username, email, userPassword, isAdmin, avatar)
                    VALUES("${username}", "${email}", "${hash}", ${isAdmin}, "${avatar}");`
        db.query(q, (err, result) => {
            if(err){
                next(err);
            }
    
            res.send('A new user has been added successfully');
        })
    }catch(err){
        next(err);
    }
   
}

export default register;