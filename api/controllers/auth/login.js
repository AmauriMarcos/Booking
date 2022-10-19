import db from "../../config/mysql.js";
import bcrypt from "bcryptjs";
import { createError } from "./../../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//I'm using ES6 modules 
//because of that I need to import path and fileURLToPath from url 
//to make __dirname works properly

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname + "/./../../.env" });

const login = (req, res, next) => {
  const {username, password} = req.body;
  const q = `SELECT * FROM users WHERE username="${username}"`;

  db.query(q, (err, user) => {
    //Send an error message if user is not found
    if(user?.length === 0) return next(createError(404, 'User not found'));
    if (err) {
      next(err);
    }
    //get hash password from database 
    const hash = user[0]?.userPassword;
    //comparing hash against user password
    const isPasswordCorrect = bcrypt.compareSync(password, hash);
    //Send an error message if password or username are incorrect
    if(!isPasswordCorrect) return next(createError(400, 'Password or username invalid.'));

    //destructuring user data from database
    const {id, isAdmin, username, email, avatar} = user[0];

    //Creating my JWT
    const payload = {
      id,
      isAdmin,
      username, 
      email, 
      avatar
    }
    
    const token = jwt.sign(payload,process.env.JWT_SECRET);

    let options = {
      httpOnly: true, // The cookie only accessible by the web server
      secure: false
    }

    res.cookie("access_token", token, options).send({
      message: "User successfully logged in",
      user: id,
      isAdmin,
      username, 
      email, 
      avatar
    });

  });
};

export default login;
