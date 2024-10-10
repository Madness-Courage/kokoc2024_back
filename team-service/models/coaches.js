const teamPool = require('../config/db');

class Coach {
    static async getAllCoaches() {
        const result = await teamPool.query('SELECT * FROM coaches');
        return result.rows;
    }

    static async getCoachById(id) {
        const result = await teamPool.query('SELECT * FROM coaches WHERE id = $1', [id]);
        return result.rows;
    }
}

module.exports = Coach;