const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY;

function generateToken(payload) {
    return jwt.sign(payload, SECRET, {expiresIn: '2h'});
}

module.exports = generateToken;