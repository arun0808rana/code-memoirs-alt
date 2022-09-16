const jwt = require('jsonwebtoken');

function useAuth(req, res, next) {
    const token = req.cookies.token || req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, msg: 'Access Denied. Please provide a token.' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, msg: 'Invalid Credentials.' });
        }
        res.user = user;
        next();
    })
}

module.exports = useAuth;