require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connectToDB } = require("./config/database");
const PORT = process.env.PORT || 8080;

// middleware setup
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);

connectToDB();
app.listen(PORT, () => {
  console.log("server is connected");
});
