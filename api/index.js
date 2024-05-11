import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import newsRoutes from "./routes/news.routes.js"
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