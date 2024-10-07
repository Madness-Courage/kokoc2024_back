const {Pool} = require('pg');
require('dotenv').config();

const newsPool = new Pool({
    user: process.env.NS_DB_USER,
    host: process.env.NS_DB_HOST,
    database: process.env.NS_DB_NAME,
    password: process.env.NS_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

const usersPool = new Pool({
    user: process.env.US_DB_USER,
    host: process.env.US_DB_HOST,
    database: process.env.US_DB_NAME,
    password: process.env.US_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {usersPool, newsPool};
