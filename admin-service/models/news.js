const newsPool = require('../config/db');

class News {
    static async getNews() {
        const res = await newsPool.query('SELECT * FROM news ORDER BY created_at DESC');
        return res.rows;
    }

    static async create(photo, title, text, author, is_important) {
        const query = 'INSERT INTO news (photo, title, text, author, is_important) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [photo, title, text, author, is_important];
        const result = await newsPool.query(query, values);
        return result.rows[0];
    }

    static async findById(id) {
        const query = 'SELECT * FROM news WHERE id = $1';
        const values = [id];
        const result = await newsPool.query(query, values);
        return result.rows[0];
    }

    static async deleteById(id) {
        const query = 'DELETE FROM news WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await newsPool.query(query, values);
        return result.rows[0];
    }
}

module.exports = News;
