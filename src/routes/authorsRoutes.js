import express from "express";
import AuthorController from "../controllers/authorsController.js";

const authorRouter = express.Router();

authorRouter
  .get("/authors"      , AuthorController.findAll)
  .get("/authors/:id"  , AuthorController.findById)
  .post("/authors"     , AuthorController.create)
  .put("/authors"      , AuthorController.update)
  .delete("/authors"   , AuthorController.delete)

export default authorRouter;