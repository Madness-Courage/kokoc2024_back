const {usersPool} = require('../config/db');

class User {
    static async makeAdmin(username) {
        const query = 'UPDATE users SET admin = TRUE WHERE username = $1 RETURNING *';
        const values = [username];
        const result = await usersPool.query(query, values);
        return result.rows[0];
    }

    static async makeNotAdmin(username) {
        const query = 'UPDATE users SET admin = FALSE WHERE username = $1 RETURNING *';
        const values = [username];
        const result = await usersPool.query(query, values);
        return result.rows[0];
    }

    static async findByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = $1';
        const values = [username];
        const result = await usersPool.query(query, values);
        return result.rows[0];
    }

    static async isAdmin(username) {
        const query = 'SELECT admin FROM users WHERE username = $1';
        const values = [username];
        const result = await usersPool.query(query, values);
        return result.rows[0]?.admin || false;
    }
}

module.exports = User;
