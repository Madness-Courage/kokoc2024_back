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
}

module.exports = Staff;