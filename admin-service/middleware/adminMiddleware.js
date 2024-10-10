const adminMiddleware = (req, res, next) => {
    if (!req.user || !req.user.admin) {
        return res.status(403).json({error: 'Forbidden: Only admins can perform this action'});
    }
    next();
};

module.exports = adminMiddleware;