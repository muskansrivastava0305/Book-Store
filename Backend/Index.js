import express from "express";
import dotenv from "dotenv";

// const express = require('express');
// const dotenv = require("dotenv");
const app = express()

dotenv.config();
// const port = 3000

const PORT = process.nextTick.PORT || 40001

app.get('/', (req, res) => {
  res.send('MERN kal ')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})