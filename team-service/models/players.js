const {teamPool} = require('../config/db');

class Player {
    static async getAllPlayers() {
        const result = await teamPool.query('SELECT * FROM players');
        return result.rows;
    }

    static async getPlayerById(id) {
        const result = await teamPool.query('SELECT * FROM players WHERE id = $1', [id]);
        return result.rows;
    }
}

module.exports = Player;