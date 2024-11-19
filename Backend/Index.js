import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js"
// const express = require('express');
// const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
// const port = 3000

const PORT = process.env.PORT || 4001;
const URL = process.env.MongoDbURL;

// app.get('/', (req, res) => {
//   res.send('MERN kal ')
// })

try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
