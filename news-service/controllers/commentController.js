const Comment = require('../models/comment');

exports.addComment = async (req, res) => {
    const { news_id, text } = req.body;
    const author = req.user.username;

    const comment = await Comment.addComment(news_id, author, text);
    res.json(comment);
};

exports.deleteComment = async (req, res) => {
    const { id } = req.params;
    const author = req.user.username;

    const comment = await Comment.deleteComment(id, author);

    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted' });
};
