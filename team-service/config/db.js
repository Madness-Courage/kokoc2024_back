const {Pool} = require('pg');
require('dotenv').config();

const teamPool = new Pool({
    user: process.env.TM_DB_USER,
    host: process.env.TM_DB_HOST,
    database: process.env.TM_DB_NAME,
    password: process.env.TM_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {teamPool};
