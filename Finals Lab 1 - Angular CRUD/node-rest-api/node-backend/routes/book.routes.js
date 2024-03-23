const express = require('express');
const app = express();
 
const bookRoute = express.Router();
let Book = require('../model/Book');
 
// Add Book
bookRoute.route('/add-book').post(async (req, res, next) => {
  try {
    const data = await Book.create(req.body);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

 
// Get all Book
bookRoute.route('/').get(async (req, res, next) => {
  try {
    const data = await Book.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

 
// Get Book
bookRoute.route('/read-book/:id').get(async (req, res, next) => {
  try {
    const data = await Book.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

 
 
// Update Book
bookRoute.route('/update-book/:id').put(async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
    console.log('Book updated successfully!');
  } catch (error) {
    return next(error);
  }
});

 
// Delete Book
bookRoute.route('/delete-book/:id').delete(async (req, res, next) => {
  try {
    const data = await Book.deleteOne({ _id: req.params.id });
    if (data.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully!" });
  } catch (error) {
    return next(error);
  }
});

 
module.exports = bookRoute;