import express from "express";
import LivroController from "../controllers/livrosController.js";

const livroRouter = express.Router();

livroRouter
  .get("/livros"          , LivroController.listar)
  .get("/livros/busca"    , LivroController.buscarPorEditora)
  .get("/livros/:id"      , LivroController.buscarPorId)
  .post("/livros"         , LivroController.criar)
  .put("/livros"          , LivroController.atualizar)
  .delete("/livros"       , LivroController.deletar)

export default livroRouter;