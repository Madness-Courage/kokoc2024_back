const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const mailer = require('../utils/mailer');
const {v4: uuidv4} = require('uuid');

class UserController {
    static async register(req, res) {
        try {
            const {full_name, username, password, email, phone} = req.body;
            const photo = req.file ? req.file.buffer : null;
            const password_hash = await bcrypt.hash(password, 10);
            const user = await UserModel.createUser({photo, full_name, username, password_hash, email, phone});
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await UserModel.getUserByUsername(username);
            if (!user || !(await bcrypt.compare(password, user.password_hash))) {
                return res.status(401).json({error: 'Invalid credentials'});
            }
            const accessToken = jwt.sign({
                userId: user.id,
                username: user.username,
                admin: user.admin
            }, process.env.JWT_SECRET, {expiresIn: '15m'});
            const refreshToken = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
            res.json({accessToken, refreshToken});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async refreshToken(req, res) {
        try {
            const {refreshToken} = req.body;
            const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
            const accessToken = jwt.sign({userId: decoded.userId}, process.env.JWT_SECRET, {expiresIn: '15m'});
            res.json({accessToken});
        } catch (error) {
            res.status(401).json({error: 'Invalid token'});
        }
    }

    static async requestResetPassword(req, res) {
        try {
            const {email} = req.body;
            const user = await UserModel.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }
            const reset_code = uuidv4();
            const reset_code_expires = new Date(Date.now() + 3600000); // 1 hour
            await UserModel.updateResetCode(email, reset_code, reset_code_expires);
            await mailer.sendResetPasswordEmail(email, reset_code);
            res.json({message: 'Password reset code sent to your email'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async resetPassword(req, res) {
        try {
            const {reset_code, new_password} = req.body;
            const user = await UserModel.getUserByResetCode(reset_code);
            if (!user) {
                return res.status(400).json({error: 'Invalid or expired reset code'});
            }
            const password_hash = await bcrypt.hash(new_password, 10);
            await UserModel.updateUser(user.id, {
                photo: user.photo,
                full_name: user.full_name,
                username: user.username,
                password_hash,
                email: user.email,
                phone: user.phone
            });
            res.json({message: 'Password reset successfully'});
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }


    static async updateProfile(req, res) {
        try {
            const {id} = req.user;
            const {full_name, username, password, email, phone} = req.body;
            const photo = req.file ? req.file.buffer : null;
            const password_hash = password ? await bcrypt.hash(password, 10) : undefined;
            const user = await UserModel.updateUser(id, {photo, full_name, username, password_hash, email, phone});
            res.json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async getUserData(req, res) {
        try {
            const {userId} = req.user;
            const user = await UserModel.getUserById(userId);
            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = UserController;
