const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
