const express = require('express');
const { getBook } = require('./controllers/bookController.js');
const app = express();
const port = 3000;

app.get('/api/books', getBook)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))