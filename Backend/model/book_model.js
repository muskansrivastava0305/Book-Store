//Data-base schema

import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category: String,
    image:String,
    title: String,
   'Stock Price': { type: Date } 
});

const Book = mongoose.model("Book" , bookSchema);

export default Book;
