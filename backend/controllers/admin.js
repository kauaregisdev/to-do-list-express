const Task = require('../models/Task');
const User = require('../models/User');

async function getAllTasks(req, res) {
    const tasks = await Task.find().populate('owner', 'username');
    res.json(tasks);
}

async function getAllUsers(req, res) {
    const users = await User.find().select('-password');
    res.json(users);
}

module.exports = {getAllTasks, getAllUsers};