const {pool} = require('../config/db');

class Match {
    static async create(match) {
        const {
            team1,
            team1_logo_url,
            team2,
            team2_logo_url,
            team1_goals,
            team2_goals,
            stadium,
            start_time,
            stream_url,
            registration_form_url
        } = match;
        const result = await pool.query(
            'INSERT INTO matches (team1, team1_logo_url, team2, team2_logo_url, team1_goals, team2_goals, stadium, start_time, stream_url, registration_form_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
            [team1, team1_logo_url, team2, team2_logo_url, team1_goals, team2_goals, stadium, start_time, stream_url, registration_form_url]
        );
        return result.rows[0];
    }

    static async update(id, match) {
        const {
            team1,
            team1_logo_url,
            team2,
            team2_logo_url,
            team1_goals,
            team2_goals,
            stadium,
            start_time,
            stream_url,
            registration_form_url
        } = match;
        const result = await pool.query(
            'UPDATE matches SET team1 = coalesce($1, team1), team1_logo_url = coalesce($2, team1_logo_url), team2 = coalesce($3, team2), team2_logo_url = coalesce($4, team2_logo_url), team1_goals = coalesce($5, team1_goals), team2_goals = coalesce($6, team2_goals), stadium = coalesce($7, stadium), start_time = coalesce($8, start_time), stream_url = coalesce($9, stream_url), registration_form_url = coalesce($10, registration_form_url) WHERE id = $11 RETURNING *',
            [team1, team1_logo_url, team2, team2_logo_url, team1_goals, team2_goals, stadium, start_time, stream_url, registration_form_url, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM matches WHERE id = $1', [id]);
        return result.rowCount;
    }

    static async getAll() {
        const result = await pool.query('SELECT * FROM matches');
        return result.rows;
    }
}

module.exports = Match;
