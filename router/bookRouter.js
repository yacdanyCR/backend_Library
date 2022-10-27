const express = require('express');
const { getBook, getBookId, deleteBook, addBook } = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/',getBook);
bookRouter.get('/:id',getBookId);
bookRouter.delete('/:id',deleteBook);
bookRouter.post('/',addBook);

module.exports = bookRouter;