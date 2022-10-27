const express = require('express');
const bookRouter = require('./router/bookRouter.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/books', bookRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))