const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold);

    process.exit(1);
  }
};

module.exports = connectDB;
