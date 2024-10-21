import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// const express = require('express');
// const dotenv = require("dotenv");
const app = express();

dotenv.config();
// const port = 3000

const PORT = process.nextTick.PORT || 40001;
const URI = process.env.MongoDBURI;

// app.get('/', (req, res) => {
//   res.send('MERN kal ')
// })

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
