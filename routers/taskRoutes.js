const express = require('express');
const router = express.Router();
const authToken = require('../middlewares/authMiddleware');
const {
    getTasks,
    postTask,
    putTask,
    deleteTask
} = require('../controllers/taskController');

router.use(authToken);

router.get('/', getTasks);
router.post('/', postTask);
router.put('/:id', putTask);
router.delete('/:id', deleteTask);

module.exports = router;