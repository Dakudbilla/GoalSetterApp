const express = require("express");

const { errorHandler, notFound } = require("./middleware/errorMiddleware");
require("dotenv").config();

const connectDB = require("./config/dbConfig");
const port = process.env.PORT;

const app = express();
connectDB();
//Use inbuilt Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use custom middleware
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler, notFound);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
