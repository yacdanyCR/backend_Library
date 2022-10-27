const getConection = require("../db/db.js");

const getBook = async (req, res) => {
    try {
        const connection = await getConection();
        const result = await connection.query('SELECT * FROM book');
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

module.exports = {
    getBook
}