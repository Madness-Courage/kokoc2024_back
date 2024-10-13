const {matchesPool} = require('../config/db');

class Match {
    static async getAll() {
        const result = await matchesPool.query('SELECT * FROM matches');
        return result.rows;
    }
}

module.exports = Match;
