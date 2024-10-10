const Player = require('../models/players');

class PlayerController {
    static async getAllPlayers(req, res) {
        try {
            const players = await Player.getAllPlayers();
            res.json(players);
        } catch (error) {
            res.status(500).json({error: 'Failed to get players'});
        }
    }

    static async getPlayerById(req, res) {
        try {
            const id = req.params.id;
            const player = await Player.getPlayerById(id);
            if (!player) {
                res.status(404).json({error: 'Player not found'});
            } else {
                res.json(player);
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to get player'});
        }
    }

    static async createPlayer(req, res) {
        try {
            const player = await Player.createPlayer(req.body);
            res.json(player);
        } catch (error) {
            res.status(500).json({error: 'Failed to create player'});
        }
    }

    static async updatePlayer(req, res) {
        try {
            const id = req.params.id;
            const player = await Player.updatePlayer(id, req.body);
            if (!player) {
                res.status(404).json({error: 'Player not found'});
            } else {
                res.json(player);
            }
        } catch (error) {
            res.status(500).json({error: 'Failed to update player'});
        }
    }

    static async deletePlayer(req, res) {
        try {
            const id = req.params.id;
            await Player.deletePlayer(id);
            res.json({message: 'Player deleted successfully'});
        } catch (error) {
            res.status(500).json({error: 'Failed to delete player'});
        }
    }
}

module.exports = PlayerController;