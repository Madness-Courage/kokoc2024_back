const News = require('../models/news');

exports.addNews = async (req, res) => {
    const {photo, title, text, author} = req.body;
    try {
        await News.create(photo, title, text, author);
        res.json({message: 'News item created'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.deleteNews = async (req, res) => {
    const {id} = req.params;

    try {
        const news = await News.deleteById(id);
        if (!news) {
            return res.status(404).json({error: 'News not found'});
        }

        res.json({message: 'News item deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.getNews = async (req, res) => {
    try {
        const news = await News.getNews();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({error: 'Failed to get news'});
    }
}
