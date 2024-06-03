import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import newsRoutes from "./routes/news.routes.js";
import authRoutes from "./routes/client.routes.js"

dotenv.config();

const app= express();

app.use(cors());
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(express.json());
app.use(allowCrossDomain);
app.use("/server/news", newsRoutes);
app.use("/server/auth",authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});




app.listen(3001,()=>{
    console.log("server is listening on Port 3005");
})


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB successfully connected.");
  })
  .catch((err) => {
    console.log(err);
  });

import Userpref from './models/userpref.js'
import User from './models/usermodel.js'


Userpref()
User()