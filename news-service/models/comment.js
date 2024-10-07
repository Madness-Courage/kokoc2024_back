const {newsPool} = require('../config/db');

class Comment {
    static async addComment(news_id, author, text) {
        const res = await newsPool.query(
            'INSERT INTO comments (news_id, author, text, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *',
            [news_id, author, text]
        );
        return res.rows[0];
    }

    static async deleteComment(id, author) {
        const res = await newsPool.query('DELETE FROM comments WHERE id = $1 AND author = $2 RETURNING *', [id, author]);
        return res.rows[0];
    }
}

module.exports = Comment;
