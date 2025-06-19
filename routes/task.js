const express = require('express');
const router = express.Router();
const authToken = require('../middlewares/auth');
const {
    getTasks,
    postTask,
    putTask,
    deleteTask
} = require('../controllers/task');

router.get('/', authToken, getTasks);
router.post('/', authToken, postTask);
router.put('/:id', authToken, putTask);
router.delete('/:id', authToken, deleteTask);

module.exports = router;