const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({
  path: './config/config.env'
});

// Connect to Database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow.bold
  )
);

// Handle unhnalded promise rejections (Doesn't work on Windows. Will switch to Try-Catch later.)
// process.on('unhandledRejection', (err, promise) => {
//   console.log(`Error: ${err.message}`)
//   // Close Server & exit process
//   server.close(() => process.exit(1));
// });