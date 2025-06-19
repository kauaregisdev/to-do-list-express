const generateToken = require('../services/authService');

const userMock = {
    id: 1,
    username: 'admin',
    password: 'admin123'
};

function login(req, res) {
    const {username, password} = req.body;

    if (username !== userMock.username || password !== userMock.password) {
        return res.status(401).json({error: 'Invalid credentials.'});
    }

    const token = generateToken({
        id: userMock.id,
        username: userMock.username,
        password: userMock.password
    });
    return res.json({token});
}

module.exports = {login};