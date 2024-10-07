const { newsPool } = require('../config/db');

class News {
    static async getNews(limit) {
        const res = await newsPool.query('SELECT * FROM news ORDER BY created_at DESC LIMIT $1', [limit]);
        return res.rows;
    }
}

module.exports = News;
