const {Pool} = require('pg');
require('dotenv').config();

const userPool = new Pool({
    user: process.env.US_DB_USER,
    host: process.env.US_DB_HOST,
    database: process.env.US_DB_NAME,
    password: process.env.US_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = userPool;
