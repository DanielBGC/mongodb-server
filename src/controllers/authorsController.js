import authors from "../models/Author.js";

class AuthorController {

  static findAll = (req, res) => {
    authors.find((err, authors) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error listing authors.`});
      }
      return res.status(200).json(authors);
    });
  };

  static findById = (req, res) => {

    const id = req.params.id;

    authors.findById(id, (err, author) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Error when searching for author ${id}.`});
      }

      return res.status(200).json(author ? author : {message: `Author ${id} not found.`});
    });

  };

  static create = (req, res) => {

    let author = new authors(req.body);

    author.save((err, author) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error creating author: ${err}.`});
      }
      return res.status(201).json(author);
    });

  };

  static update = (req, res) => {

    let id = req.body.id;

    authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error updating author ${id}.`});
      }

      return res.status(200).json({message: `Author ${id} successfully updated!`});
    });

  };

  static delete = (req, res) => {

    let id = req.body.id;

    authors.findByIdAndRemove(id, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error deleting author ${id}.`});
      }

      return res.status(200).json({message: `Author ${id} successfully deleted!`});
    });

  };

};

export default AuthorController;