const express = require('express');
const { getBook } = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/',getBook);

module.exports = bookRouter;