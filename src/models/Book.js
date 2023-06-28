import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id             : { type: String },
    title          : { type: String, required: true },
    //author          : { type: String, required: true },
    author         : { type: mongoose.Schema.Types.ObjectId, ref: "authors", required: true },
    publisher      : { type: String, required: true },
    createdAt      : { type: Date, default: Date.now() },
    pagesNumber    : { type: Number }
});

const books = mongoose.model('books', BookSchema);

export default books;