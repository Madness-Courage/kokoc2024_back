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
const teamPool = new Pool({
    user: process.env.TM_DB_USER,
    host: process.env.TM_DB_HOST,
    database: process.env.TM_DB_NAME,
    password: process.env.TM_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

const matchesPool = new Pool({
    user: process.env.MS_DB_USER,
    host: process.env.MS_DB_HOST,
    database: process.env.MS_DB_NAME,
    password: process.env.MS_DB_PASS,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {usersPool, newsPool, teamPool, matchesPool};
