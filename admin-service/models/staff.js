const {teamPool} = require('../config/db');

class Staff {
    static async getAllStaff() {
        const result = await teamPool.query('SELECT * FROM staff');
        return result.rows;
    }

    static async getStaffById(id) {
        const result = await teamPool.query('SELECT * FROM staff WHERE id = $1', [id]);
        return result.rows;
    }

    static async createStaff(staff) {
        const {photo, full_name, role} = staff;
        const result = await teamPool.query(
            'INSERT INTO staff (photo, full_name, role) VALUES ($1, $2, $3) RETURNING *',
            [photo, full_name, role]
        );
        return result.rows;
    }

    static async updateStaff(id, staff) {
        const {photo, full_name, role} = staff;
        const result = await teamPool.query(
            'UPDATE staff SET photo = $1, full_name = $2, role = $3 WHERE id = $4 RETURNING *',
            [photo, full_name, role, id]
        );
        return result.rows;
    }

    static async deleteStaff(id) {
        await teamPool.query('DELETE FROM staff WHERE id = $1', [id]);
    }
}

module.exports = Staff;