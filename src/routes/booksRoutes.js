import express from "express";
import BookController from "../controllers/booksController.js";

const bookRouter = express.Router();

bookRouter
  .get("/books"          , BookController.findAll)
  .get("/books/busca"    , BookController.findByPublisher)
  .get("/books/:id"      , BookController.findById)
  .post("/books"         , BookController.create)
  .put("/books"          , BookController.update)
  .delete("/books"       , BookController.delete)

export default bookRouter;