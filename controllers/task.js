const Task = require('../models/Task');

async function getTasks(req, res) {
    try {
        const tasks = await Task.find({owner: req.userId});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function postTask(req, res) {
    try {
        const {title, done} = req.body;
        const task = new Task({
            title,
            done: done === 'true' || done === true || done === 1 || done === '1',
            owner: req.userId
        });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function putTask(req, res) {
    try {
        const {title, done} = req.body;
        const task = await Task.findOneAndUpdate({
            _id: req.params.id,
            owner: req.userId
        }, {
            title,
            done: done === 'true' || done === true || done === 1 || done === '1'
        }, {new: true});
        if (!task) return res.status(404).json({error: 'Task not found.'});
        res.status(200).json(task);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function deleteTask(req, res) {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.userId
        });
        if (!task) return res.status(404).json({error: 'Task not found.'});
        res.status(204).end();
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    getTasks,
    postTask,
    putTask,
    deleteTask
};