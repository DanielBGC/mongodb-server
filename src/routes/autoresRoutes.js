import express from "express";
import AutorController from "../controllers/autoresController.js";

const autorRouter = express.Router();

autorRouter
  .get("/autores"      , AutorController.listar)
  .get("/autores/:id"  , AutorController.buscarPorId)
  .post("/autores"     , AutorController.criar)
  .put("/autores"      , AutorController.atualizar)
  .delete("/autores"   , AutorController.deletar)

export default autorRouter;