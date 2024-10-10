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

    static async createPlayer(player) {
        const {photo, full_name, date_of_birth, biography} = player;
        const result = await teamPool.query(
            'INSERT INTO players (photo, full_name, date_of_birth, biography) VALUES ($1, $2, $3, $4) RETURNING *',
            [photo, full_name, date_of_birth, biography]
        );
        return result.rows;
    }

    static async updatePlayer(id, player) {
        const {photo, full_name, date_of_birth, biography} = player;
        const result = await teamPool.query(
            'UPDATE players SET photo = $1, full_name = $2, date_of_birth = $3, biography = $4 WHERE id = $5 RETURNING *',
            [photo, full_name, date_of_birth, biography, id]
        );
        return result.rows;
    }

    static async deletePlayer(id) {
        await teamPool.query('DELETE FROM players WHERE id = $1', [id]);
    }
}

module.exports = Player;