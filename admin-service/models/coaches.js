const {teamPool} = require('../config/db');

class Coach {
    static async getAllCoaches() {
        const result = await teamPool.query('SELECT * FROM coaches');
        return result.rows;
    }

    static async getCoachById(id) {
        const result = await teamPool.query('SELECT * FROM coaches WHERE id = $1', [id]);
        return result.rows;
    }

    static async createCoach(coach) {
        const {photo, full_name, biography} = coach;
        const result = await teamPool.query(
            'INSERT INTO coaches (photo, full_name, biography) VALUES ($1, $2, $3) RETURNING *',
            [photo, full_name, biography]
        );
        return result.rows;
    }

    static async updateCoach(id, coach) {
        const {photo, full_name, biography} = coach;
        const result = await teamPool.query(
            'UPDATE coaches SET photo = $1, full_name = $2, biography = $3 WHERE id = $4 RETURNING *',
            [photo, full_name, biography, id]
        );
        return result.rows;
    }

    static async deleteCoach(id) {
        await teamPool.query('DELETE FROM coaches WHERE id = $1', [id]);
    }
}

module.exports = Coach;