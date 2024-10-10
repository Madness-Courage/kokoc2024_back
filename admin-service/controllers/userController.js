const User = require('../models/user');

exports.makeAdmin = async (req, res) => {
    const {username} = req.body;

    try {
        const user = await User.findByUsername(username);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }

        await User.makeAdmin(username);
        res.json({message: 'User is now an admin'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.makeNotAdmin = async (req, res) => {
    const {username} = req.body;

    try {
        const user = await User.findByUsername(username);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }

        await User.makeNotAdmin(username);
        res.json({message: 'User is now not an admin'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
