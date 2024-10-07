const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');

router.put('/make-admin', authMiddleware, userController.makeAdmin);
router.put('/make-not-admin', authMiddleware, userController.makeNotAdmin)
router.post('/add-news', authMiddleware, newsController.addNews);
router.delete('/delete-news/:id', authMiddleware, newsController.deleteNews);

module.exports = router;
