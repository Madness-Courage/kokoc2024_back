const {usersPool} = require('../config/db');

class User {
    static async findByUsername(username) {
        const res = await usersPool.query('SELECT * FROM users WHERE username = $1', [username]);
        return res.rows[0];
    }
}

module.exports = User;
