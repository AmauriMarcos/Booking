import mysql from 'mysql2';
import dotenv from 'dotenv';

//I'm using ES6 modules 
//because of that I need to import path and fileURLToPath from url 
//to make __dirname works properly

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname + "/./../../.env" });


const db = mysql.createConnection({
  host: "mysql-db.ctagtludrbj3.eu-central-1.rds.amazonaws.com",
  user: "amauri",
  password: process.env.MYSQL_PASSWORD,
  database: "cloud337",
  insecureAuth: true,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("MySQL has been connected!!!");
  console.log(err);
});

export default db;
