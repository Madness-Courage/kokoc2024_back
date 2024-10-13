const {Pool} = require('pg');
require('dotenv').config();

const storePool = new Pool({
    user: process.env.SR_DB_USER,
    host: process.env.SR_DB_HOST,
    database: process.env.SR_DB_NAME,
    password: process.env.SR_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {storePool};