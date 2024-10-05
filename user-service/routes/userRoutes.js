const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/refresh-token', UserController.refreshToken);
router.post('/request-reset-password', UserController.requestResetPassword);
router.post('/reset-password', UserController.resetPassword);
router.get('/profile', authMiddleware, UserController.getUserData);
router.put('/profile', authMiddleware, UserController.updateProfile);

module.exports = router;
