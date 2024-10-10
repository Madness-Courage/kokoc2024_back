const userPool = require('../config/db');

class UserModel {
    static async createUser(user) {
        const {photo, full_name, username, password_hash, email, phone} = user;
        const query = `
            INSERT INTO users (photo, full_name, username, password_hash, email, phone)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `;
        const values = [photo, full_name, username, password_hash, email, phone];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }

    static async getUserByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = $1';
        const values = [username];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }

    static async getUserByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }

    static async updateUser(id, user) {
        const {photo, full_name, username, password_hash, email, phone} = user;
        const query = `
            UPDATE users
            SET photo         = COALESCE($1, photo),
                full_name     = COALESCE($2, full_name),
                username      = COALESCE($3, username),
                password_hash = COALESCE($4, password_hash),
                email         = COALESCE($5, email),
                phone         = COALESCE($6, phone)
            WHERE id = $7
            RETURNING *
        `;
        const values = [photo, full_name, username, password_hash, email, phone, id];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }


    static async updateResetCode(email, reset_code, reset_code_expires) {
        const query = `
            UPDATE users
            SET reset_code         = $1,
                reset_code_expires = $2
            WHERE email = $3
            RETURNING *
        `;
        const values = [reset_code, reset_code_expires, email];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }

    static async getUserByResetCode(reset_code) {
        const query = `
            SELECT *
            FROM users
            WHERE reset_code = $1
              AND reset_code_expires > NOW()
        `;
        const values = [reset_code];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }

    static async getUserById(id) {
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
        const result = await userPool.query(query, values);
        return result.rows[0];
    }
}

module.exports = UserModel;
