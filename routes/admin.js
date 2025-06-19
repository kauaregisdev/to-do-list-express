const express = require('express');
const authToken = require('../middlewares/auth');
const isAdmin = require('../middlewares/admin');
const {getAllTasks, getAllUsers} = require('../controllers/admin');
const router = express.Router();

router.get('/all-tasks', authToken, isAdmin, getAllTasks);
router.get('/all-users', authToken, isAdmin, getAllUsers);

module.exports = router;