require('dotenv').config();

const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const connectDatabase = require('./config/database');

app.use(express.json());

(async () => {
    app.use('/admin', adminRoutes);
    app.use('/auth', authRoutes);
    app.use('/tasks', taskRoutes);

    console.log('Connecting database...');
    await connectDatabase();

    console.log('Running server...');
    app.listen(3000, () => console.log('✅ Server running at http://localhost:3000'));
})();