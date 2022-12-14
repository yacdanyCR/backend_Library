const getConection = require("../db/db");

const getUsers = async (req, res) => {
    try {
        const connection = await getConection();
        const result = await connection.query("SELECT * FROM user");
        res.json(result);
    } catch (error) {
        res.status(500);
    }
}

const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = {
            email,
            password
        }
        const connection = await getConection();
        const result = await connection.query("INSERT INTO user SET ?", user);
        res.json(result);
    } catch (error) {
        res.status(500);
    }
}

module.exports = {
    getUsers,
    addUser
}