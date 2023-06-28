import autores from "../models/autor.js";

class AutorController {

  static listar = (req, res) => {
    autores.find((err, autores) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao listar autores.`});
      }
      return res.status(200).json(autores);
    });
  };

  static buscarPorId = (req, res) => {

    const id = req.params.id;

    autores.findById(id, (err, autor) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Erro ao buscar autor ${id}.`});
      }

      return res.status(200).json(autor ? autor : {message: `autor ${id} não encontrado.`});
    });

  };

  static criar = (req, res) => {

    let autor = new autores(req.body);

    autor.save((err, autor) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao criar autor: ${err}.`});
      }
      return res.status(201).json(autor);
    });

  };

  static atualizar = (req, res) => {

    let id = req.body.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao atualizar autor ${id}.`});
      }

      return res.status(200).json({message: `autor ${id} atualizado com sucesso!`});
    });

  };

  static deletar = (req, res) => {

    let id = req.body.id;

    autores.findByIdAndRemove(id, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao deletar autor ${id}.`});
      }

      return res.status(200).json({message: `autor ${id} deletado com sucesso!`});
    });

  };

};

export default AutorController;