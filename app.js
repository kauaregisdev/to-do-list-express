require('dotenv').config();

const express = require('express');
const app = express();
const authRoutes = require('./routers/authRoutes');
const taskRoutes = require('./routers/taskRoutes');
const connectDatabase = require('./config/database');

app.use(express.json());

(async () => {
    app.use('/auth', authRoutes);
    app.use('/tasks', taskRoutes);

    console.log('Connecting database...');
    await connectDatabase();

    console.log('Running server...');
    app.listen(3000, () => console.log('✅ Server running at http://localhost:3000'));
})();