const Staff = require('../models/staff');

class StaffController {
    static async getAllStaff(req, res) {
        try {
            const staff = await Staff.getAllStaff();
            res.json(staff);
        } catch (error) {
            res.status(500).json({error: 'Failed to get staff'});
        }
    }

    static async getStaffById(req, res) {
        try {
            const id = req.params.id;
            const staff = await Staff.getStaffById(id);
            if (!staff) {
                res.status(404).json({error: 'Staff not found'});
            } else {
                res.json(staff);
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to get staff'});
        }
    }
}

module.exports = StaffController;