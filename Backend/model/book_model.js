import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name:String,
    proce:Number,
    category: String,
    image:String,
    title: String,
});

const Book = mongoose.modek("Book" , bookSchema);

export default Book;
