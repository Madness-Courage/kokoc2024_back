const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const newsController = require('../controllers/newsController');
const playerController = require('../controllers/playerController');
const coachController = require('../controllers/coachController');
const staffController = require('../controllers/staffController');
const matchController = require('../controllers/matchController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require("../middleware/adminMiddleware");

router.put('/users/make-admin', authMiddleware, adminMiddleware, userController.makeAdmin);
router.put('/users/make-not-admin', authMiddleware, adminMiddleware, userController.makeNotAdmin);

router.get('/news', authMiddleware, adminMiddleware, newsController.getNews);
router.post('/news/add-news', authMiddleware, adminMiddleware, newsController.addNews);
router.delete('/news/delete-news/:id', authMiddleware, adminMiddleware, newsController.deleteNews);

router.get('/players', authMiddleware, adminMiddleware, playerController.getAllPlayers);
router.get('/players/:id', authMiddleware, adminMiddleware, playerController.getPlayerById);
router.post('/players', authMiddleware, adminMiddleware, playerController.createPlayer);
router.put('/players/:id', authMiddleware, adminMiddleware, playerController.updatePlayer);
router.delete('/players/:id', authMiddleware, adminMiddleware, playerController.deletePlayer);

router.get('/coaches', authMiddleware, adminMiddleware, coachController.getAllCoaches);
router.get('/coaches/:id', authMiddleware, adminMiddleware, coachController.getCoachById);
router.post('/coaches', authMiddleware, adminMiddleware, coachController.createCoach);
router.put('/coaches/:id', authMiddleware, adminMiddleware, coachController.updateCoach);
router.delete('/coaches/:id', authMiddleware, adminMiddleware, coachController.deleteCoach);

router.get('/staff', authMiddleware, adminMiddleware, staffController.getAllStaff);
router.get('/staff/:id', authMiddleware, adminMiddleware, staffController.getStaffById);
router.post('/staff', authMiddleware, adminMiddleware, staffController.createStaff);
router.put('/staff/:id', authMiddleware, adminMiddleware, staffController.updateStaff);
router.delete('/staff/:id', authMiddleware, adminMiddleware, staffController.deleteStaff);

router.post('/matches', authMiddleware, adminMiddleware, matchController.createMatch);
router.put('/matches/:id', authMiddleware, adminMiddleware, matchController.updateMatch);
router.delete('/matches/:id', authMiddleware, adminMiddleware, matchController.deleteMatch);
router.get('/matches', authMiddleware, adminMiddleware, matchController.getAllMatches);

module.exports = router;
