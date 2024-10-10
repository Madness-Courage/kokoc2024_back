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

    static async createStaff(req, res) {
        try {
            const staff = await Staff.createStaff(req.body);
            res.json(staff);
        } catch (error) {
            res.status(500).json({error: 'Failed to create staff'});
        }
    }

    static async updateStaff(req, res) {
        try {
            const id = req.params.id;
            const staff = await Staff.updateStaff(id, req.body);
            if (!staff) {
                res.status(404).json({error: 'Staff not found'});
            } else {
                res.json(staff);
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to update staff'});
        }
    }

    static async deleteStaff(req, res) {
        try {
            const id = req.params.id;
            await Staff.deleteStaff(id);
            res.json({message: 'Staff deleted successfully'});
        } catch (error) {
            res.status(500).json({error: 'Failed to delete staff'});
        }
    }
}

module.exports = StaffController;