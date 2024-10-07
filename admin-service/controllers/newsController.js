const News = require('../models/news');

exports.addNews = async (req, res) => {
    const {photo, title, text, author} = req.body;
    try {
        const news = await News.create(photo, title, text, author);
        res.json({message: 'News item created'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteNews = async (req, res) => {
    const {id} = req.params;
    const currentUser = req.user.username;

    try {
        const isCurrentUserAdmin = await User.isAdmin(currentUser);
        if (!isCurrentUserAdmin) {
            return res.status(403).json({error: 'You do not have permission to perform this action'});
        }

        const news = await News.deleteById(id);
        if (!news) {
            return res.status(404).json({error: 'News not found'});
        }

        res.json({message: 'News item deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
