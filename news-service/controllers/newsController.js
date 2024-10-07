const News = require('../models/news');

exports.getNews = async (req, res) => {
    const {limit} = req.query;
    const news = await News.getNews(limit || null);
    res.json(news);
};
