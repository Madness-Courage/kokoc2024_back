const Match = require('../models/match');

exports.getAllMatches = async (req, res) => {
    try {
        const matches = await Match.getAll();
        res.status(200).json(matches);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};
