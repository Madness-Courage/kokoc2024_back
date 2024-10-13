const {Pool} = require('pg');
require('dotenv').config();

const matchesPool = new Pool({
    user: process.env.MS_DB_USER,
    host: process.env.MS_DB_HOST,
    database: process.env.MS_DB_NAME,
    password: process.env.MS_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {matchesPool};