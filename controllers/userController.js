const getConection = require("../db/db");

const getUsers = async (req,res) => {
    try {
        const connection = await  getConection();
        const result = await connection.query("SELECT * FROM user");
        res.json(result);
    } catch (error) {

    }
}

module.exports ={
    getUsers
}