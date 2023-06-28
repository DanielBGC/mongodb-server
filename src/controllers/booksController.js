import books from "../models/Book.js";

class BookController {

  static findAll = (req, res) => {
    books.find()
      .populate('author', ['name']) // Fill in the "author" field with the author's name
      .exec((err, books) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error listing books.`});
      }
      return res.status(200).json(books);
    });
  };

  static findById = (req, res) => {

    const id = req.params.id;
    
    books.findById(id)
      .populate('author')  // Fill in the "author" field with the author's complete object
      .exec((err, book) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Error when searching for book ${id}.`});
      }

      return res.status(200).json(book ? book : {message: `Book ${id} not found.`});
    });

  };

  static findByPublisher = (req, res) => {

    const publisher = req.query.publisher;
    
    books.find({ editora: publisher }, {})
      .populate('author')  
      .exec((err, books) => {
      if(err) {
        console.error(err);
        return res.status(400).json({message: `Error fetching books from publisher ${publisher}.`});
      }

      return res.status(200).json(books ? books : {message: `Books by Publisher ${publisher} not found.`});
    });

  };

  static create = (req, res) => {

    let book = new books(req.body);

    book.save((err, book) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error creating book: ${err}.`});
      }
      return res.status(201).json(book);
    });

  };

  static update = (req, res) => {

    let id = req.body.id;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error updating book ${id}.`});
      }

      return res.status(200).json({message: `Book ${id} successfully updated!`});
    });

  };

  static delete = (req, res) => {

    let id = req.body.id;

    books.findByIdAndRemove(id, (err) => {
      if(err) {
        console.error(err);
        return res.status(500).json({message: `Error deleting book ${id}.`});
      }

      return res.status(200).json({message: `Book ${id} successfully deleted!`});
    });

  };

};

export default BookController;