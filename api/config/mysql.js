import mysql from 'mysql2';
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname + "/./../../.env" });


const db = mysql.createConnection({
  host: "bookingdb.cgdjpjrqetvz.us-east-1.rds.amazonaws.com",
  port: '3306',
  user: "amaurisantos",
  password: process.env.MYSQL_PASSWORD,
  database: "booking",
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
