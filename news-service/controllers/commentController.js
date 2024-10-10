const Comment = require('../models/comment');

exports.addComment = async (req, res) => {
    const {news_id, text} = req.body;
    const author = req.user.username;
    await Comment.addComment(news_id, author, text);
    res.status(200).json({message: 'Comment added successfully'});
};

exports.deleteComment = async (req, res) => {
    const {id} = req.params;
    const author = req.user.username;

    const comment = await Comment.deleteComment(id, author);

    if (!comment) {
        return res.status(404).json({error: 'Comment not found'});
    }

    res.json({message: 'Comment deleted successfully'});
};

exports.getComment = async (req, res) => {
    const news_id = req.body;
    const comment = await Comment.getComment(news_id);
    res.status(200).json(comment);
};

