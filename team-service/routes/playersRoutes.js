const express = require('express');
const router = express.Router();
const PlayerController = require('../controllers/playerController');

router.get('/', PlayerController.getAllPlayers);
router.get('/:id', PlayerController.getPlayerById);


module.exports = router;