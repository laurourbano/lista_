/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`);
});

module.exports = connection;