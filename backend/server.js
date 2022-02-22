const express = require("express");
const path = require("path");
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
app.use("/api/users", require("./routes/userRoutes"));

//serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please Set Up to Production"));
}
app.use(errorHandler, notFound);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
