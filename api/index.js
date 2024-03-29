import express from 'express';
import db from './config/mysql.js';
import authRoute from './routes/auth.js';
import propertiesRoute from './routes/properties.js';
import roomsRoute from './routes/rooms.js';
import infoRoute from './routes/info.js';
import usersRoute from './routes/users.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 8000;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,          
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));


app.use(express.urlencoded());


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Helloooo World");
});


app.use(cookieParser());
app.use('/api/auth', authRoute);
app.use('/api/info', infoRoute);
app.use('/api/users', usersRoute);
app.use('/api/properties', propertiesRoute);
app.use('/api/rooms', roomsRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500; 
  const errorMessage = err.message || 'Something went wrong!'; 
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  });
});


app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
