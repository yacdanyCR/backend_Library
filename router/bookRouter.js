const express = require('express');
const { getBook, getBookId, deleteBook } = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/',getBook);
bookRouter.get('/:id',getBookId);
bookRouter.delete('/delete/:id',deleteBook);

module.exports = bookRouter;