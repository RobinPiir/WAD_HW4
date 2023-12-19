// database.js
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Undertale1", // Enter your postgres password here
    database: "WAD", // Create database with this name
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

// A simple query that creates a table in our database
const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
        "id" SERIAL PRIMARY KEY,         
        "date" VARCHAR(200) NOT NULL,
        "body" VARCHAR(200) NOT NULL
    );`;

const createTblQueryAcc = `
    CREATE TABLE IF NOT EXISTS "accounttable" (
        "id" SERIAL PRIMARY KEY,         
        "email" VARCHAR(200) NOT NULL,
        "password" VARCHAR(200) NOT NULL
    );`;

// A function to execute the previous query   
execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exist, create the "posttable" table');
    }
});

execute(createTblQueryAcc).then(result => {
    if (result) {
        console.log('If does not exist, create the "accounttable" table');
    }
});

module.exports = pool;