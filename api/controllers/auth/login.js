import db from "../../config/mysql.js";
import bcrypt from "bcryptjs";
import { createError } from "./../../utils/error.js";
import jwt from 'jsonwebtoken';

const login = (req, res, next) => {
  const username = req.body;
  const senhaDaJu = "juj123";
  const q = `SELECT * FROM users WHERE username="Julia"`;

  db.query(q, (err, user) => {
    //Send an error message if user is not found
    if(user.length === 0) return next(createError(404, 'User not found'));
    if (err) {
      next(err);
    }
    //get hash password from database 
    const hash = user[0].userPassword;
    //comparing hash against user password
    const isPasswordCorrect = bcrypt.compareSync(senhaDaJu, hash);
    //Send an error message if password or username are incorrect
    if(!isPasswordCorrect) return next(createError(400, 'Password or username invalid.'));

    //destructuring user data from database
    const {id, userPassword, isAdmin, ...otherDetails} = user[0];

    //Creating my JWT
    const maxAge = 3 * 60 * 60;
    const token = jwt.sign(
      { id: id, idAdmin: isAdmin},
      'jwtsecret',
      {
        expiresIn: maxAge, // 3hrs in sec
      }
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // 3hrs in ms
    });
    res.status(201).json({
      message: "User successfully logged in",
      user: id,
      token
    });

  });
};

export default login;
