import livros from "../models/Livro.js";

class LivroController {

  static listar = (req, res) => {
    livros.find()
      .populate('autor', ['nome']) // Popula o campo autor com o nome do autor
      .exec((err, livros) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao listar livros.`});
      }
      return res.status(200).json(livros);
    });
  };

  static buscarPorId = (req, res) => {

    const id = req.params.id;

    livros.findById(id)
      .populate('autor')  // Popula o campo autor com o objeto completo do autor
      .exec((err, livro) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Erro ao buscar livro ${id}.`});
      }

      return res.status(200).json(livro ? livro : {message: `Livro ${id} não encontrado.`});
    });

  };

  static buscarPorEditora = (req, res) => {

    const editora = req.query.editora;
    
    livros.find({ editora: editora }, {})
      .populate('autor')  
      .exec((err, livros) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Erro ao buscar livros da editora ${editora}.`});
      }

      return res.status(200).json(livros ? livros : {message: `Livros da editora ${editora} não encontrado.`});
    });

  };

  static criar = (req, res) => {

    let livro = new livros(req.body);

    livro.save((err, livro) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao criar livro: ${err}.`});
      }
      return res.status(201).json(livro);
    });

  };

  static atualizar = (req, res) => {

    let id = req.body.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao atualizar livro ${id}.`});
      }

      return res.status(200).json({message: `Livro ${id} atualizado com sucesso!`});
    });

  };

  static deletar = (req, res) => {

    let id = req.body.id;

    livros.findByIdAndRemove(id, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Erro ao deletar livro ${id}.`});
      }

      return res.status(200).json({message: `Livro ${id} deletado com sucesso!`});
    });

  };

};

export default LivroController;