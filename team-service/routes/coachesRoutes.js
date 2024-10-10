const express = require('express');
const router = express.Router();
const CoachController = require('../controllers/coachController');

router.get('/', CoachController.getAllCoaches);
router.get('/:id', CoachController.getCoachById);

module.exports = router;