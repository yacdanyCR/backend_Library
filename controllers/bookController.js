const getConection = require("../db/db.js");

const addBook = async (req, res) => {
    try {
        console.log(req.body)
        const { name, category, quantity } = req.body;
        const book={
            name,
            category,
            quantity
        }
        const connection = await getConection();
        const result = await connection.query("INSERT INTO book SET ?",book);
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

const getBook = async (req, res) => {
    try {
        const connection = await getConection();
        const result = await connection.query('SELECT * FROM book');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

const getBookId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConection();
        const result = await connection.query(`SELECT * FROM book WHERE id = ${id}`);
        res.json(result);
    } catch (error) {

    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConection();
        const result = await connection.query(`DELETE FROM book WHERE id = ${id}`);
        console.log(result)
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getBook,
    getBookId,
    deleteBook,
    addBook
}