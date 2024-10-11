const Match = require('../models/match');

exports.createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMatch = async (req, res) => {
    try {
        const match = await Match.update(req.params.id, req.body);
        res.status(200).json(match);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMatch = async (req, res) => {
    try {
        const result = await Match.delete(req.params.id);
        res.status(200).json({ message: `Deleted ${result} match(es)` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllMatches = async (req, res) => {
    try {
        const matches = await Match.getAll();
        res.status(200).json(matches);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
