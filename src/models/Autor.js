import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema({
    id             : { type: String },
    nome           : { type: String, required: true },
    nacionalidade  : { type: String },
    dataCriacao    : { type: Date, default: Date.now() }
}, { versionKey: false });

const autores = mongoose.model('autores', AutorSchema);

export default autores;