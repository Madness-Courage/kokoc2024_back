const Coach = require('../models/coaches');

class CoachController {
    static async getAllCoaches(req, res) {
        try {
            const coaches = await Coach.getAllCoaches();
            res.json(coaches);
        } catch (error) {
            res.status(500).json({error: 'Failed to get coaches'});
        }
    }

    static async getCoachById(req, res) {
        try {
            const id = req.params.id;
            const coach = await Coach.getCoachById(id);
            if (!coach) {
                res.status(404).json({error: 'Coach not found'});
            } else {
                res.json(coach);
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to get coach'});
        }
    }
}

module.exports = CoachController;