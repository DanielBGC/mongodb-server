import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    id             : { type: String },
    name           : { type: String, required: true },
    nationality    : { type: String },
    createdAt      : { type: Date, default: Date.now() }
}, { versionKey: false });

const authors = mongoose.model('authors', AuthorSchema);

export default authors;