const mysql = require('promise-mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database, 
    config:config.port
});

const getConection = () => {
    return connection;
}

module.exports = getConection;