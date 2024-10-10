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
        const {photo, full_name, date_of_birth, biography, position, number} = player;
        const result = await teamPool.query(
            'INSERT INTO players (photo, full_name, date_of_birth, biography, position, number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [photo, full_name, date_of_birth, biography, position, number]
        );
        return result.rows;
    }

    static async updatePlayer(id, player) {
        const {photo, full_name, date_of_birth, biography, position, number} = player;
        const result = await teamPool.query(
            'UPDATE players SET photo = COALESCE($1, photo), full_name = COALESCE($2, full_name), date_of_birth = COALESCE($3, date_of_birth), biography = COALESCE($4, biography), position = COALESCE($5, position), number = COALESCE($6, number) WHERE id = $7 RETURNING *',
            [photo, full_name, date_of_birth, biography, position, number, id]
        );
        return result.rows;
    }

    static async deletePlayer(id) {
        await teamPool.query('DELETE FROM players WHERE id = $1', [id]);
    }
}

module.exports = Player;