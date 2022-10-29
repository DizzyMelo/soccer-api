const AppError = require('../utils/appError');

exports.isLoggedIn = (req, res, next) => {
    if (!req.oidc.isAuthenticated()) {
        return next(new AppError('User not logged in!', 403));
    }
    next();
}