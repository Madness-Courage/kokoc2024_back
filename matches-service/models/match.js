const pool = require('../config/db');

class Match {
    static async getAll() {
        const result = await pool.query('SELECT * FROM matches');
        return result.rows;
    }
}

module.exports = Match;
