// database.js
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "nustik12",
    database: "WAD",
    host: "localhost",
    port: "5432"
});

module.exports = pool;