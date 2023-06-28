import dotenv  from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ndqlv.mongodb.net`);

const db = mongoose.connection;

export default db;