const express = require('express');
const config = require('../config.js');
const bookRouter = require('../router/bookRouter.js');
const userRouter = require('../router/userRouter.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/book', bookRouter);
app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))